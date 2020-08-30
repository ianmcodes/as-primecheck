const loader = require("@assemblyscript/loader");
const Benchmark = require("benchmark");
const util = require("util");
const numbers = [BigInt(5), BigInt(13), BigInt(277), BigInt(2999),
  BigInt(10151), BigInt(154877), BigInt(5297879), BigInt(15485339),
  BigInt(694847533)];

let logDsp;
const log = (...args) => {
  console.log(...args);
  logDsp = logDsp || document.getElementById('log');
  if (logDsp) {
    logDsp.innerHTML += util.format(...args) + '\n';
  }
};

async function init() {
  log('Running Benchmark...');
  const wasm = await loader.instantiate(fetch("./pkg/optimized.wasm"), {});
  window.module = wasm.exports;
  window.Benchmark = Benchmark;
  const suite = new Benchmark.Suite;
  suite.add('primeCheck', function() {
    numbers.forEach(n => window.module.primeCheck(n,10));
  })
  .on('cycle', function(evt) {
    log(evt.target.toString());
  })
  .on('complete', function() {
    const results = this[0];
    const runs = results.stats.sample.length;
    const mean = results.stats.mean;
    log(`Mean of ${runs} runs: ${(mean * 1000).toFixed(10)}ms ±${(results.stats.moe * 1000).toFixed(10)}ms (${results.stats.rme.toFixed(2)}%)`);
    results.stats.sample.forEach((s, i) => log(`Run ${i}: ${(s * 1000).toFixed(10)}ms`));
  })
  .run({async: true});
}

init();
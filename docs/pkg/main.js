const loader = require("@assemblyscript/loader");
async function init() {
  let t0 = performance.now();
  let wasm = await loader.instantiate(fetch("./pkg/optimized.wasm"), {});
  window.module = wasm.exports;
  let t1 = performance.now();
  document.getElementById('info').innerHTML = `WebAssembly module initalized in ${t1 - t0}ms`;
  console.log(`WebAssembly module initalized in ${t1 - t0}ms`);

  initPrimeCheck();
  initModPow();
  initRngGenRange();
}

function initPrimeCheck() {
  let numInput = document.getElementById("primeCheckNum");
  let btn = document.getElementById("primeCheckSubmit");
  let dsp = document.getElementById("primeCheckResult");
  btn.addEventListener('click',handleInput);
  function handleInput(evt) {
    let num;
    try {
      num = BigInt(numInput.value);
    } catch (e) {
      dsp.innerHTML = "Invalid input";
      return;
    }
    let t0 = performance.now();
    let result = window.module.primeCheck(num,10);
    let t1 = performance.now();
    if (result) {
      dsp.innerHTML = `Probably Prime (took ${t1 - t0}ms to complete)`;
    } else {
      dsp.innerHTML = `Not Prime (took ${t1 - t0}ms to complete)`;
    }
  }
}

function initModPow() {
  let baseInput = document.getElementById("modPowBase");
  let expInput = document.getElementById("modPowExp");
  let modInput = document.getElementById("modPowMod");
  let btn = document.getElementById("modPowSubmit");
  let dsp = document.getElementById("modPowResult");

  btn.addEventListener('click',handleInput);

  function handleInput(evt) {
    let base, exponent, modulus;
    try {
      base = BigInt(baseInput.value);
      exponent = BigInt(expInput.value);
      modulus = BigInt(modInput.value);
    } catch (e) {
      dsp.innerHTML = "Invalid input";
    }
    let t0 = performance.now();
    let result = window.module.modpow(base, exponent, modulus);
    let t1 = performance.now();
    dsp.innerHTML = `${result} (took ${t1 - t0}ms to complete)`;
  }
}

function initRngGenRange() {
  let minInput = document.getElementById("rngGenRangeMin");
  let maxInput = document.getElementById("rngGenRangeMax");
  let btn = document.getElementById("rngGenRangeSubmit");
  let dsp = document.getElementById("rngGenRangeResult");
  btn.addEventListener('click',handleInput);
  function handleInput(evt) {
    let min, max;
    try {
      min = BigInt(minInput.value);
      max = BigInt(maxInput.value);
    } catch (e) {
      dsp.innerHTML = "Invalid input";
    }
    let t0 = performance.now();
    let result = window.module.rng_gen_range(min, max);
    let t1 = performance.now();
    dsp.innerHTML = `${result} (took ${t1 - t0}ms to complete)`;
  }
}
init();
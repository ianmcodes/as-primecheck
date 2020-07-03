const loader = require("@assemblyscript/loader");

async function init() {
  const t0 = performance.now();
  const wasm = await loader.instantiate(fetch("./pkg/optimized.wasm"), {});
  window.module = wasm.exports;
  const t1 = performance.now();
  document.getElementById('info').innerHTML = `WebAssembly module initalized in ${t1 - t0}ms`;
  console.log(`WebAssembly module initalized in ${t1 - t0}ms`);

  initPrimeCheck();
  initModPow();
  initRngGenRange();
}

function initPrimeCheck() {
  const numInput = document.getElementById("primeCheckNum");
  const btn = document.getElementById("primeCheckSubmit");
  const dsp = document.getElementById("primeCheckResult");

  btn.addEventListener('click', () => {
    let num;
    try {
      num = BigInt(numInput.value);
    } catch (e) {
      dsp.innerHTML = "Invalid input";
      return;
    }
    const t0 = performance.now();
    const result = window.module.primeCheck(num,10);
    const t1 = performance.now();
    if (result) {
      dsp.innerHTML = `Probably Prime (took ${t1 - t0}ms to complete)`;
    } else {
      dsp.innerHTML = `Not Prime (took ${t1 - t0}ms to complete)`;
    }
  });
}

function initModPow() {
  const baseInput = document.getElementById("modPowBase");
  const expInput = document.getElementById("modPowExp");
  const modInput = document.getElementById("modPowMod");
  const btn = document.getElementById("modPowSubmit");
  const dsp = document.getElementById("modPowResult");

  btn.addEventListener('click', () => {
    let base, exponent, modulus;
    try {
      base = BigInt(baseInput.value);
      exponent = BigInt(expInput.value);
      modulus = BigInt(modInput.value);
    } catch (e) {
      dsp.innerHTML = "Invalid input";
    }
    const t0 = performance.now();
    const result = window.module.modpow(base, exponent, modulus);
    const t1 = performance.now();
    dsp.innerHTML = `${result} (took ${t1 - t0}ms to complete)`;
  });
}

function initRngGenRange() {
  const minInput = document.getElementById("rngGenRangeMin");
  const maxInput = document.getElementById("rngGenRangeMax");
  const btn = document.getElementById("rngGenRangeSubmit");
  const dsp = document.getElementById("rngGenRangeResult");

  btn.addEventListener('click', () => {
    let min, max;
    try {
      min = BigInt(minInput.value);
      max = BigInt(maxInput.value);
    } catch (e) {
      dsp.innerHTML = "Invalid input";
    }
    const t0 = performance.now();
    const result = window.module.rng_gen_range(min, max);
    const t1 = performance.now();
    dsp.innerHTML = `${result} (took ${t1 - t0}ms to complete)`;
  });
}

init();
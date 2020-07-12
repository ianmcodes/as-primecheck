NativeMath.seedRandom(Date.now());

export function modpow(base: u64, exp: u64, mod: u64): u64 {
  if (mod === 1) {
    return 0;
  }
  let result: u64 = 1;
  base = base % mod;
  while (exp > 0) {
    if (exp & 1) {
      result = (result * base) % mod;
    }
    exp >>= 1;
    base = (base * base) % mod;
  }
  return result;
}

export function rng_gen_range(min: u64, max: u64): u64 {
  let range: f64 = f64(max - min);
  return u64(Math.floor(Math.random() * range)) + min;
}

export function primeCheck(n: u64, k: i32): bool {
  if (n === 1 || n === 3) {
    return true;
  } else if ((n & 1) === 0) {
    return false;
  }
  while (k > 0) {
    let a = rng_gen_range(2, n - 2);
    let x = modpow(a, n - 1, n);
    if (x !== 1) {
      return false;
    }
    k -= 1;
  }
  return true;
}

// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function modpow(base: i64, exp: i64, mod: i64): i64 {
  if (mod === 1) {
    return 0;
  }
  let result: i64 = 1;
  base = base % mod;
  while (exp > 0) {
    if (exp % 2 === 1) {
      result = (result * base) % mod;
    }
    exp = exp >> 1;
    base = (base * base) % mod;
  }
  return result;
}

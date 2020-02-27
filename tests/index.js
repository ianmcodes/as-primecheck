const assert = require("assert");
const myModule = require("..");
// Check add
assert.strictEqual(myModule.add(1, 2), 3);
// Check modpow
assert.strictEqual(myModule.modpow(64n, 42n, 1n), 0n);
assert.strictEqual(myModule.modpow(100n, 42n, 23n), 9n);
// Check primeCheck
assert.strictEqual(myModule.primeCheck(1n, 10), 1);
assert.strictEqual(myModule.primeCheck(3n, 10), 1);
assert.strictEqual(myModule.primeCheck(2n, 10), 0);
assert.strictEqual(myModule.primeCheck(9973n, 10), 1);
console.log("ok");

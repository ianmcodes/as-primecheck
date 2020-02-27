const assert = require("assert");
const myModule = require("..");
assert.equal(myModule.add(1, 2), 3);
assert.equal(myModule.modpow(64n, 42n, 1n), 0n)
console.log("ok");

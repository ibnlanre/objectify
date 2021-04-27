import assert from "assert"
import objectify from "./index.js"

let myMap = new Map([
  [0, "zero"],
  [1, [4, 5, 6]],
  [2, { a: { b: [0, 1, 2] } }]
]);

let mySet = new Set([6, 8, 90]);

assert.deepStrictEqual(objectify(myMap), {
  0: "zero",
  1: [4, 5, 6],
  2: { a: { b: [0, 1, 2] } },
});
assert.deepStrictEqual(objectify(3), {});
assert.deepStrictEqual(objectify("help"), { 0: "h", 1: "e", 2: "l", 3: "p" });
assert.deepStrictEqual(objectify(mySet), {
  6: undefined,
  8: undefined,
  90: undefined,
});

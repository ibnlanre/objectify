const assert = require("assert");
const objectify = require("./index.js");
const { hrtime } = require("process")

const start = hrtime();

assert.deepStrictEqual(objectify(5), {});
assert.deepStrictEqual(objectify("help"), { 0: "h", 1: "e", 2: "l", 3: "p" });
assert.deepStrictEqual(
  objectify(
    new Map([
      [0, "zero"],
      [1, [4, 5, 6]],
      [2, { a: { b: [0, 1, 2] } }],
    ])
  ),
  {
    0: "zero",
    1: [4, 5, 6],
    2: { a: { b: [0, 1, 2] } },
  }
);
assert.deepStrictEqual(objectify(3), {});
assert.deepStrictEqual(objectify("help"), { 0: "h", 1: "e", 2: "l", 3: "p" });
assert.deepStrictEqual(
  objectify(new Set([6, 8, 90]), ([value], index) => [index, value]),
  {
    0: 6,
    1: 8,
    2: 90,
  }
);
assert.deepStrictEqual(
  objectify(
    new WeakMap([
      [{ 0: "zero", 1: "one" }, "1st"],
      [{ 2: "two", 3: "three" }, "2nd"],
    ])
  ),
  {}
);

const [, end] = hrtime(start)
console.log("\x1b[32m%s\x1b[0m - %dms", "√ passing", end / 10 ** 6);
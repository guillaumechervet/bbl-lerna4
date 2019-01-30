"use strict";

const monjournalmain = require("..");

const assert = require("assert");

describe("monjournalmain", () => {
  it("needs tests", () => {
    const result = monjournalmain(20, 10);
    assert.equal(result, 32);
  });
});

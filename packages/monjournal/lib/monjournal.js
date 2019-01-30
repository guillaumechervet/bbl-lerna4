"use strict";

const R = require("ramda");

module.exports = monjournal;

function monjournal(a, b) {
  return R.add(a)(b);
}

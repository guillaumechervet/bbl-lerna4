"use strict";

module.exports = monjournalmain;

const monjournal = require("@guillaume.chervet/monjournal");
function monjournalmain(a, b) {
  return monjournal(a, b + 2);
}

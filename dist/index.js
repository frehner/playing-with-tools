"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myExportedVar = void 0;

var _other = require("./other.js");

console.log(_other.exportedConst);
const myExportedVar = true;
exports.myExportedVar = myExportedVar;

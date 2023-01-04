"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Sum = function Sum(array) {
  var sum = 0;
  array.forEach(function (item) {
    sum += item;
  });
  return sum;
};
var _default = Sum;
exports["default"] = _default;
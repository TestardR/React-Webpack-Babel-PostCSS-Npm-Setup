"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./anotherDummy.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AnotherDummy = function AnotherDummy() {
  return _react["default"].createElement("div", {
    className: "another-dummy__title--green"
  }, "I am another dummy");
};

var _default = AnotherDummy;
exports["default"] = _default;
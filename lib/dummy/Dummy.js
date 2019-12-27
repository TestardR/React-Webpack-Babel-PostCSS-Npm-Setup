"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _AnotherDummy = _interopRequireDefault(require("../anotherDummy/AnotherDummy"));

require("./dummy.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Dummy = function Dummy() {
  return _react["default"].createElement("div", null, _react["default"].createElement("h2", {
    className: "dummy__title--red"
  }, "I am a dummy"), _react["default"].createElement(_AnotherDummy["default"], null));
};

var _default = Dummy;
exports["default"] = _default;
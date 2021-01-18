"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(c, out) {
  var t = {
    name: "",
    raw: ""
  };

  if (c.expression.arguments[0].left.type === "Identifier") {
    var _c$expression$argumen;

    t.name = (_c$expression$argumen = c.expression.arguments[0].left) === null || _c$expression$argumen === void 0 ? void 0 : _c$expression$argumen.name;
  } else if (c.expression.arguments[0].right.type === "Identifier") {
    var _c$expression$argumen2;

    t.name = (_c$expression$argumen2 = c.expression.arguments[0].right) === null || _c$expression$argumen2 === void 0 ? void 0 : _c$expression$argumen2.name;
  }

  if (c.expression.arguments[0].right.type === "Literal") {
    var _c$expression$argumen3;

    t.raw = "\"".concat((_c$expression$argumen3 = c.expression.arguments[0].right) === null || _c$expression$argumen3 === void 0 ? void 0 : _c$expression$argumen3.value, "\"");
  } else if (c.expression.arguments[0].left.type === "Literal") {
    var _c$expression$argumen4;

    t.raw = "\"".concat((_c$expression$argumen4 = c.expression.arguments[0].left) === null || _c$expression$argumen4 === void 0 ? void 0 : _c$expression$argumen4.value, "\"");
  }

  out.cash.code += "print(".concat(t.name).concat(c.expression.arguments[0].operator).concat(t.raw, ");");
  return out;
};

exports["default"] = _default;
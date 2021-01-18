"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(c, out) {
  var _a, _b, _c, _d;

  var t = {
    name: "",
    raw: ""
  };

  if (c.expression.arguments[0].left.type === "Identifier") {
    t.name = (_a = c.expression.arguments[0].left) === null || _a === void 0 ? void 0 : _a.name;
  } else if (c.expression.arguments[0].right.type === "Identifier") {
    t.name = (_b = c.expression.arguments[0].right) === null || _b === void 0 ? void 0 : _b.name;
  }

  if (c.expression.arguments[0].right.type === "Literal") {
    t.raw = "\"" + ((_c = c.expression.arguments[0].right) === null || _c === void 0 ? void 0 : _c.value) + "\"";
  } else if (c.expression.arguments[0].left.type === "Literal") {
    t.raw = "\"" + ((_d = c.expression.arguments[0].left) === null || _d === void 0 ? void 0 : _d.value) + "\"";
  }

  out.cash.code += "print(" + t.name + c.expression.arguments[0].operator + t.raw + ");";
  return out;
};

exports["default"] = _default;
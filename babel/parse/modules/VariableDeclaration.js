"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(c, out) {
  if (c.type === "VariableDeclaration") {
    if (c.declarations[0].type === "VariableDeclarator") {
      if (c.declarations[0].id.type === "Identifier") {
        if (c.declarations[0].init.type === "Literal") {
          out.cash.code += "".concat(c.declarations[0].id.name, "=").concat(c.declarations[0].init.value, ";");
        }
      }
    }
  }

  return out;
};

exports["default"] = _default;
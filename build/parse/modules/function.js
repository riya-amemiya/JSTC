"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _VariableDeclaration = _interopRequireDefault(require("./VariableDeclaration"));

var _BinaryExpression = _interopRequireDefault(require("./BinaryExpression"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var _default = function _default(code, out) {
  var e_1, _a, e_2, _b;

  var argument = {
    name: [],
    out: ""
  };

  try {
    for (var _c = __values(code.params), _d = _c.next(); !_d.done; _d = _c.next()) {
      var params = _d.value;
      argument.name.push(params.name);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  for (var i = 0; i < argument.name.length; i++) {
    var t = "";

    if (i !== argument.name.length - 1) {
      t = ",";
    }

    argument.out += "" + argument.name[i] + t;
  }

  try {
    for (var _e = __values(code.body.body), _f = _e.next(); !_f.done; _f = _e.next()) {
      var c = _f.value;

      if (c.type === "VariableDeclaration") {
        out = (0, _VariableDeclaration["default"])(c, out);
      }

      if (c.type === "ExpressionStatement") {
        if (c.expression.type === "CallExpression") {
          if (c.expression.callee.type === "MemberExpression") {
            if (c.expression.callee.object.name === "console") {
              if (c.expression.callee.property.name === "log") {
                if (c.expression.arguments[0].type === "Literal") {
                  out.cash.code += "print(\"" + c.expression.arguments[0].value + "\");";
                } else if (c.expression.arguments[0].type === "BinaryExpression") {
                  (0, _BinaryExpression["default"])(c, out);
                }
              }
            }
          }
        }
      }

      if (c.type === "ReturnStatement") {
        if ((c === null || c === void 0 ? void 0 : c.argument.type) === "BinaryExpression") {
          out.cash["return"] += c.argument.left.name + " " + c.argument.operator + " " + c.argument.right.name;
        }
      }
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
    } finally {
      if (e_2) throw e_2.error;
    }
  }

  out.code += "def " + code.id.name + "(" + argument.out + "): " + out.cash.code + " return " + out.cash["return"] + "\n";
  return out;
};

exports["default"] = _default;
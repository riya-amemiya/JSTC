"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = python;

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

function python(codes) {
  var e_1, _a, e_2, _b, e_3, _c;

  var out = {
    code: "",
    cash: {
      code: "",
      "return": ""
    }
  };
  var argument = {
    name: [],
    out: ""
  };

  try {
    for (var _d = __values(codes.body), _e = _d.next(); !_e.done; _e = _d.next()) {
      var code = _e.value;

      if (code.type === "FunctionDeclaration") {
        try {
          for (var _f = (e_2 = void 0, __values(code.params)), _g = _f.next(); !_g.done; _g = _f.next()) {
            var params = _g.value;
            argument.name.push(params.name);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (_g && !_g.done && (_b = _f["return"])) _b.call(_f);
          } finally {
            if (e_2) throw e_2.error;
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
          for (var _h = (e_3 = void 0, __values(code.body.body)), _j = _h.next(); !_j.done; _j = _h.next()) {
            var c = _j.value;

            if (c.type === "VariableDeclaration") {
              if (c.declarations[0].type === "VariableDeclarator") {
                if (c.declarations[0].id.type === "Identifier") {
                  if (c.declarations[0].init.type === "Literal") {
                    out.cash.code += c.declarations[0].id.name + "=" + c.declarations[0].init.value + ";";
                  }
                }
              }
            }

            if (c.type === "ExpressionStatement") {
              if (c.expression.type === "CallExpression") {
                if (c.expression.callee.type === "MemberExpression") {
                  if (c.expression.callee.object.name === "console") {
                    if (c.expression.callee.property.name === "log") {
                      if (c.expression.arguments[0].type === "Literal") {
                        out.cash.code += "print(\"" + c.expression.arguments[0].value + "\");";
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
        } catch (e_3_1) {
          e_3 = {
            error: e_3_1
          };
        } finally {
          try {
            if (_j && !_j.done && (_c = _h["return"])) _c.call(_h);
          } finally {
            if (e_3) throw e_3.error;
          }
        }

        out.code += "def " + code.id.name + "(" + argument.out + "): " + out.cash.code + " return " + out.cash["return"];
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_e && !_e.done && (_a = _d["return"])) _a.call(_d);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return out;
}

;
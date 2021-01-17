"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = python;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function python(codes) {
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

  var _iterator = _createForOfIteratorHelper(codes.body),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var code = _step.value;

      if (code.type === "FunctionDeclaration") {
        var _iterator2 = _createForOfIteratorHelper(code.params),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var params = _step2.value;
            argument.name.push(params.name);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        for (var i = 0; i < argument.name.length; i++) {
          var t = "";

          if (i !== argument.name.length - 1) {
            t = ",";
          }

          argument.out += "".concat(argument.name[i]).concat(t);
        }

        var _iterator3 = _createForOfIteratorHelper(code.body.body),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var c = _step3.value;

            if (c.type === "VariableDeclaration") {
              if (c.declarations[0].type === "VariableDeclarator") {
                if (c.declarations[0].id.type === "Identifier") {
                  if (c.declarations[0].init.type === "Literal") {
                    out.cash.code += "".concat(c.declarations[0].id.name, "=").concat(c.declarations[0].init.value, ";");
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
                        out.cash.code += "print(\"".concat(c.expression.arguments[0].value, "\");");
                      }
                    }
                  }
                }
              }
            }

            if (c.type === "ReturnStatement") {
              if ((c === null || c === void 0 ? void 0 : c.argument.type) === "BinaryExpression") {
                out.cash["return"] += "".concat(c.argument.left.name, " ").concat(c.argument.operator, " ").concat(c.argument.right.name);
              }
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        out.code += "def ".concat(code.id.name, "(").concat(argument.out, "): ").concat(out.cash.code, " return ").concat(out.cash["return"]);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return out;
}

;
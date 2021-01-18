"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _default = function _default(code, out) {
  if (code.expression.type === "CallExpression") {
    if (code.expression.callee.type === "MemberExpression") {
      if (code.expression.callee.object.name === "console") {
        if (code.expression.callee.property.name === "log") {
          var _iterator = _createForOfIteratorHelper(code.expression.arguments),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var argument = _step.value;

              if (argument.type === "Literal") {
                out.code += "print(".concat(argument.raw, ")");
              }

              if (argument.type === "CallExpression") {
                if (argument.callee.type === "Identifier") {
                  var _argument = {
                    name: [],
                    out: ""
                  };

                  var _iterator2 = _createForOfIteratorHelper(argument.arguments),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var params = _step2.value;

                      _argument.name.push(params.raw);
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }

                  for (var i = 0; i < _argument.name.length; i++) {
                    var t = "";

                    if (i !== _argument.name.length - 1) {
                      t = ",";
                    }

                    _argument.out += "".concat(_argument.name[i]).concat(t);
                  }

                  out.code += "print(".concat(argument.callee.name, "(").concat(_argument.out, "));");
                }
              }

              if ((argument === null || argument === void 0 ? void 0 : argument.type) === "BinaryExpression") {
                if ((argument === null || argument === void 0 ? void 0 : argument.left.type) === "BinaryExpression") {//console.log(JSON.stringify(argument.left));
                } else if ((argument === null || argument === void 0 ? void 0 : argument.right.type) === "BinaryExpression") {}
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
    }
  }

  return out;
};

exports["default"] = _default;
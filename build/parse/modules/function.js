"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;

var __values = void 0 && (void 0).__values || function(o) {
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

    var _c, _d;

    var argument = {
        name: [],
        out: ""
    };

    try {
        for (var _e = __values(code.params), _f = _e.next(); !_f.done; _f = _e.next()) {
            var params = _f.value;
            argument.name.push(params.name);
        }
    } catch (e_1_1) {
        e_1 = {
            error: e_1_1
        };
    } finally {
        try {
            if (_f && !_f.done && (_a = _e["return"])) _a.call(_e);
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
        for (var _g = __values(code.body.body), _h = _g.next(); !_h.done; _h = _g.next()) {
            var c = _h.value;

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
                                } else if (c.expression.arguments[0].type === "BinaryExpression") {
                                    var t = {
                                        name: "",
                                        raw: ""
                                    };

                                    if (c.expression.arguments[0].left.type === "Identifier") {
                                        t.name = (_c = c.expression.arguments[0].left) === null || _c === void 0 ? void 0 : _c.name;
                                    }

                                    if (c.expression.arguments[0].right.type === "Literal") {
                                        t.raw = "\"" + ((_d = c.expression.arguments[0].right) === null || _d === void 0 ? void 0 : _d.value) + "\"";
                                    }

                                    out.cash.code += "print(" + t.name + c.expression.arguments[0].operator + t.raw + ");";
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
            if (_h && !_h.done && (_b = _g["return"])) _b.call(_g);
        } finally {
            if (e_2) throw e_2.error;
        }
    }

    out.code += "def " + code.id.name + "(" + argument.out + "): " + out.cash.code + " return " + out.cash["return"] + "\n";
    return out;
};

exports["default"] = _default;
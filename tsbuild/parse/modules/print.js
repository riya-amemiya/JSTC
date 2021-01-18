var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
export default (function (code, out) {
    var e_1, _a, e_2, _b;
    if (code.expression.type === "CallExpression") {
        if (code.expression.callee.type === "MemberExpression") {
            if (code.expression.callee.object.name === "console") {
                if (code.expression.callee.property.name === "log") {
                    try {
                        for (var _c = __values(code.expression.arguments), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var argument = _d.value;
                            if (argument.type === "Literal") {
                                out.code += "print(" + argument.raw + ")";
                            }
                            if (argument.type === "CallExpression") {
                                if (argument.callee.type === "Identifier") {
                                    var _argument = { name: [], out: "" };
                                    try {
                                        for (var _e = (e_2 = void 0, __values(argument.arguments)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                            var params = _f.value;
                                            _argument.name.push(params.raw);
                                        }
                                    }
                                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                    finally {
                                        try {
                                            if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
                                        }
                                        finally { if (e_2) throw e_2.error; }
                                    }
                                    for (var i = 0; i < _argument.name.length; i++) {
                                        var t = "";
                                        if (i !== _argument.name.length - 1) {
                                            t = ",";
                                        }
                                        _argument.out += "" + _argument.name[i] + t;
                                    }
                                    out.code += "print(" + argument.callee.name + "(" + _argument.out + "));";
                                }
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
            }
        }
    }
    return out;
});
//# sourceMappingURL=print.js.map
export default (function (c, out) {
    if (c.type === "VariableDeclaration") {
        if (c.declarations[0].type === "VariableDeclarator") {
            if (c.declarations[0].id.type === "Identifier") {
                if (c.declarations[0].init.type === "Literal") {
                    out.cash.code += c.declarations[0].id.name + "=" + c.declarations[0].init.value + ";";
                }
            }
        }
    }
    return out;
});
//# sourceMappingURL=VariableDeclaration.js.map
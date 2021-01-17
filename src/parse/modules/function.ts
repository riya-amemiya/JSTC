import * as acorn from "acorn"
export default (code: acorn._Body3) =>
{
    let out: { code: string, cash: { code: "", return: "" } } = { code: "", cash: { code: "", return: "" } };
    let argument: { name: string[], out: string } = { name: [], out: "" }
    for (const params of code.params)
    {
        argument.name.push(params.name)
    }
    for (let i = 0; i < argument.name.length; i++)
    {
        let t = ""
        if (i !== argument.name.length - 1)
        {
            t = ","
        }
        argument.out += `${argument.name[i]}${t}`
    }
    for (const c of code.body.body)
    {
        if (c.type === "VariableDeclaration")
        {
            if (c.declarations[0].type === "VariableDeclarator")
            {
                if (c.declarations[0].id.type === "Identifier")
                {
                    if (c.declarations[0].init.type === "Literal")
                    {
                        out.cash.code += `${c.declarations[0].id.name}=${c.declarations[0].init.value};`
                    }
                }
            }
        }
        if (c.type === "ExpressionStatement")
        {
            if (c.expression.type === "CallExpression")
            {
                if (c.expression.callee.type === "MemberExpression")
                {
                    if (c.expression.callee.object.name === "console")
                    {
                        if (c.expression.callee.property.name === "log")
                        {
                            if (c.expression.arguments[0].type === "Literal")
                            {
                                out.cash.code += `print("${c.expression.arguments[0].value}");`
                            }
                        }
                    }
                }
            }
        }
        if (c.type === "ReturnStatement")
        {
            if (c?.argument.type === "BinaryExpression")
            {
                out.cash.return += `${c.argument.left.name} ${c.argument.operator} ${c.argument.right.name}`
            }
        }
    }
    out.code += `def ${code.id.name}(${argument.out}): ${out.cash.code} return ${out.cash.return}`
    return out
}
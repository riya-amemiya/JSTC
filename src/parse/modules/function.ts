import * as acorn from "acorn"
import VariableDeclaration from "./VariableDeclaration"
import BinaryExpression from "./BinaryExpression"
export default (code: acorn._Body3, out: { code: string, cash: { code: string, return: string } }): { code: string; cash: { code: string; return: string } } =>
{
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
            out = VariableDeclaration(c, out)
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
                            else if (c.expression.arguments[0].type === "BinaryExpression")
                            {
                                BinaryExpression(c, out)
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
    out.code += `def ${code.id.name}(${argument.out}): ${out.cash.code} return ${out.cash.return}\n`
    return out
}
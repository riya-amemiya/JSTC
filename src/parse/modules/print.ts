import acorn from "../../../type/type"
export default (code: acorn.Body3, out: { code: string, cash: { code: string, return: string } }): { code: string; cash: { code: string; return: string } } =>
{
    if (code.expression.type === "CallExpression")
    {
        if (code.expression.callee.type === "MemberExpression")
        {
            if (code.expression.callee.object.name === "console")
            {
                if (code.expression.callee.property.name === "log")
                {
                    for (const argument of code.expression.arguments)
                    {
                        if (argument.type === "Literal")
                        {
                            out.code += `print(${argument.raw})`
                        }
                        if (argument.type === "CallExpression")
                        {
                            if (argument.callee.type === "Identifier")
                            {
                                let _argument: { name: string[], out: string } = { name: [], out: "" }
                                for (const params of argument.arguments)
                                {
                                    _argument.name.push(params.raw)
                                }
                                for (let i = 0; i < _argument.name.length; i++)
                                {
                                    let t = ""
                                    if (i !== _argument.name.length - 1)
                                    {
                                        t = ","
                                    }
                                    _argument.out += `${_argument.name[i]}${t}`
                                }
                                out.code += `print(${argument.callee.name}(${_argument.out}));`
                            }
                        }
                        if (argument?.type === "BinaryExpression")
                        {
                            if (argument?.left.type === "BinaryExpression")
                            {
                                //console.log(JSON.stringify(argument.left));
                            }
                            else if (argument?.right.type === "BinaryExpression")
                            {
                            }
                        }
                    }
                }
            }
        }
    }
    return out
}
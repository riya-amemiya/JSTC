import acorn from "../../type/type"
import fn from "./modules/function"
import print from "./modules/print"
export default function python(codes: acorn.Node):
    {
        code: string; cash: {
            code: string; return: string;
        };
    }
{
    let out: { code: string, cash: { code: string, return: string } } = { code: "", cash: { code: "", return: "" } };
    for (const code of codes.body)
    {
        if (code.type === "FunctionDeclaration")
        {
            out = fn(code, out)
        }
        else if (code.type === "ExpressionStatement")
        {
            out = print(code, out)
        }
    }
    return out
}

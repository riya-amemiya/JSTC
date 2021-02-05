import acorn from "../../../../type/type"
export default ( code: acorn.Body3, out: { code: string, cash: { code: string, return: string, Identifier: { name: string, value: string }[] } }, conversion: { IF: ( data: string ) => string } ) =>
{
    out.cash.code = ""
    out.cash.code += conversion.IF
    if ( code.test.type === "BinaryExpression" )
    {

    }
    return out
}
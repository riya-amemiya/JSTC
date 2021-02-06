import acorn from "../../../../type/type"
export default ( code: acorn.Body3, out: { code: string, cash: { code: string, return: string, Identifier: { name: string, value: string }[] } }, conversion: { IF: ( data: string[] ) => string } ) =>
{
    let _argument: string = ""
    if ( code.test.type === "BinaryExpression" )
    {
        if ( code.test.operator == "===" )
        {
            code.test.operator = "=="
        }
        if ( code.test.left.type === "Identifier" )
        {
            _argument += code.test.left.name + code.test.operator
        } else if ( code.test.left.type === "Literal" )
        {
            _argument += code.test.left.raw + code.test.operator
        }
        if ( code.test.right.type === "Identifier" )
        {
            _argument += code.test.right.name
        } else if ( code.test.right.type === "Literal" )
        {
            _argument += code.test.right.raw
        }
    }
    out.code += conversion.IF( [ _argument ] )
    return out
}
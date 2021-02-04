import acorn from "../../../../type/type"
export default ( code: acorn.Body3 | acorn.Body, out: { code: string, cash: { code: string, return: string, Identifier: { name: string, value: string }[] } }, conversion: { Kind: { let: ( data: string[] ) => string, const: ( data: string[] ) => string } } ): acorn.OUT =>
{
    if ( code.declarations[ 0 ].type === "VariableDeclarator" )
    {
        if ( code.kind === "let" || code.kind === "var" )
        {
            out.cash.code += conversion.Kind.let( [ code.declarations[ 0 ].id.name, code.declarations[ 0 ].init.raw ] )
        }
        else if ( code.kind === "const" )
        {
            out.cash.code += conversion.Kind.const( [ code.declarations[ 0 ].id.name.toUpperCase(), code.declarations[ 0 ].init.raw ] )
            out.cash.Identifier.push( { name: code.declarations[ 0 ].id.name, value: code.declarations[ 0 ].id.name.toUpperCase() } )
        }
    }
    return out
}
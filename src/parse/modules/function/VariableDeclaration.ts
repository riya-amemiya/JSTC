import acorn from "../../../../type/type"
/**
 * @module VariableDeclaration
 * @param c
 * @param out
 */
export default ( c: acorn.Body, out: { code: string, cash: { code: string, return: string } }, conversion: { VariableDeclaration: ( data: [ string, number ] ) => string } ):
    {
        code: string; cash: {
            code: string; return: string
        }
    } =>
{
    if ( c.type === "VariableDeclaration" )
    {
        if ( c.declarations[ 0 ].type === "VariableDeclarator" )
        {
            if ( c.declarations[ 0 ].id.type === "Identifier" )
            {
                if ( c.declarations[ 0 ].init.type === "Literal" )
                {
                    //out.cash.code += `${c.declarations[0].id.name}=${c.declarations[0].init.value};`
                    out.cash.code += conversion.VariableDeclaration( [ c.declarations[ 0 ].id.name, c.declarations[ 0 ].init.value ] )
                }
            }
        }
    }
    return out
}
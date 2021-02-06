import acorn from "../../../../type/type"
export default ( code: acorn.Body3 | acorn.Body, out: acorn.OUT, conversion: { Kind: { let: ( data: string[] ) => string, const: ( data: string[] ) => string } } ): acorn.OUT =>
{

    if ( code.declarations[ 0 ].type === "VariableDeclarator" )
    {
        if ( code.kind === "let" || code.kind === "var" )
        {
            out.cash.code += conversion.Kind.let( [ code.declarations[ 0 ].id.name, code.declarations[ 0 ].init.raw ] )
        }
        else if ( code.kind === "const" )
        {
            if ( out.cash.Identifier.findIndex( n => n.name === code.declarations[ 0 ].id.name ) === -1 )
            {
                if ( out.cash.Identifier.findIndex( n => n.to === code.declarations[ 0 ].id.name.toUpperCase() ) === -1 )
                {
                    out.cash.code += conversion.Kind.const( [ code.declarations[ 0 ].id.name.toUpperCase(), code.declarations[ 0 ].init.raw ] )
                    out.cash.Identifier.push( { name: code.declarations[ 0 ].id.name, to: code.declarations[ 0 ].id.name.toUpperCase(), value: code.declarations[ 0 ].init.raw, num: 0 } )
                } else
                {
                    out.cash.code += conversion.Kind.const( [ `_${ code.declarations[ 0 ].id.name }`, code.declarations[ 0 ].init.raw ] )
                    out.cash.Identifier.push( { name: code.declarations[ 0 ].id.name, to: `_${ code.declarations[ 0 ].id.name }`, value: code.declarations[ 0 ].init.raw, num: 0 } )
                }
            } else
            {
                out.cash.code += conversion.Kind.const( [ code.declarations[ 0 ].id.name.toUpperCase(), code.declarations[ 0 ].init.raw ] )
                out.cash.Identifier.push( { name: code.declarations[ 0 ].id.name, to: code.declarations[ 0 ].id.name.toUpperCase(), value: code.declarations[ 0 ].init.raw, num: 0 } )
            }
        }
    }
    return out
}
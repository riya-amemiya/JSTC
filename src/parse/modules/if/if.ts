import acorn from "../../../../type/type"
import { print, Out } from "./../../../api/api"
export default ( code: acorn.Body3, out: acorn.OUT, conversion: { IF: ( data: string[] ) => string } ): acorn.OUT =>
{
    let _argument = {
        BinaryExpression: "",
        out: Out.clean()
    }
    const Identifier = ( code: acorn.Left | acorn.Right ) =>
    {
        if ( out.cash.Identifier.findIndex( ( n ) => n.name === code.name ) !== -1 )
        {
            if ( out.cash.Identifier.findIndex( n => n.to === code.name ) === -1 )
            {
                return code.name.toUpperCase()
            }
            else
            {
                return `_${ code.name }`
            }
        }
        else
        {
            return code.name
        }
    }
    if ( code.test.type === "BinaryExpression" )
    {
        if ( code.test.operator == "===" )
        {
            code.test.operator = "=="
        }
        if ( code.test.left.type === "Identifier" )
        {
            _argument.BinaryExpression += `${ Identifier( code.test.left ) }${ code.test.operator }`
        } else if ( code.test.left.type === "Literal" )
        {
            _argument.BinaryExpression += code.test.left.raw + code.test.operator
        }
        if ( code.test.right.type === "Identifier" )
        {
            _argument.BinaryExpression += Identifier( code.test.right )
        } else if ( code.test.right.type === "Literal" )
        {
            _argument.BinaryExpression += code.test.right.raw
        }
        for ( const c of code.consequent.body )
        {
            _argument.out = print( c, _argument.out, {
                Literal: ( data: string ): string => `print(${ data });`,
                FunIdentifier: ( data: string[] ): string => `print(${ data[ 0 ] }(${ data[ 1 ] }));`,
                Identifier: ( data: string ): string => `print(${ data });`
            } )
        }
    }
    out.code += conversion.IF( [ _argument.BinaryExpression, _argument.out.code ] )
    return out
}
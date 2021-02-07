import acorn from "../../../type/type"
import { parse } from "../../api/api"
/**
 * @module python
 * @param {acorn.Node} codes
 * @returns {acorn.OUT} 変換結果を出力
 */
export default function python ( codes: acorn.Node ): acorn.OUT
{
    let out: acorn.OUT = { code: "", cash: { code: "", return: "", Identifier: [ { name: "", to: "", value: "", num: 0 } ] } };
    return (
        parse( codes, out, {
            Function: {
                Literal: ( data: string ): string => `print(${ data });`,
                BinaryExpression: ( data: string[] ): string => `print(${ data[ 0 ] }${ data[ 1 ] }${ data[ 2 ] });`,
                Function: ( data: string[] ): string => `def ${ data[ 0 ] }(${ data[ 1 ] }): ${ data[ 2 ] } return ${ data[ 3 ] }\n`,
                VariableDeclaration: ( data ): string => `${ data[ 0 ] }=${ data[ 1 ] };`,
                Kind: { let: ( data: string[] ): string => `${ data[ 0 ] }=${ data[ 1 ] };`, const: ( data: string[] ): string => `${ data[ 0 ] }=${ data[ 1 ] };` }
            },
            Print: {
                Literal: ( data: string ): string => `print(${ data })\n`,
                FunIdentifier: ( data: string[] ): string => `print(${ data[ 0 ] }(${ data[ 1 ] }))\n`,
                Identifier: ( data: string ): string => `print(${ data })\n`
            },
            Variable: {
                Kind: { let: ( data: string[] ): string => `${ data[ 0 ] }=${ data[ 1 ] }\n`, const: ( data: string[] ): string => `${ data[ 0 ] }=${ data[ 1 ] }\n` }
            },
            IF: ( data: string[] ) =>
            {
                return `if (${ data[ 0 ] }): ${ data[ 1 ] }\n`
            }
        } )
    )
    /*let out: acorn.OUT = { code: "", cash: { code: "", return: "", Identifier: [ { name: "", to: "", value: "", num: 0 } ] } };
    for ( const code of codes.body )
    {
        if ( code.type === "FunctionDeclaration" )
        {
            out = Function( code, out, {
                Literal: ( data: string ): string => `print(${ data });`,
                BinaryExpression: ( data: string[] ): string => `print(${ data[ 0 ] }${ data[ 1 ] }${ data[ 2 ] });`,
                Function: ( data: string[] ): string => `def ${ data[ 0 ] }(${ data[ 1 ] }): ${ data[ 2 ] } return ${ data[ 3 ] }\n`,
                VariableDeclaration: ( data ): string => `${ data[ 0 ] }=${ data[ 1 ] };`,
                Kind: { let: ( data: string[] ): string => `${ data[ 0 ] }=${ data[ 1 ] };`, const: ( data: string[] ): string => `${ data[ 0 ] }=${ data[ 1 ] };` }
            } )
        }
        else if ( code.type === "ExpressionStatement" )
        {
            out = print( code, out, {
                Literal: ( data: string ): string => `print(${ data })\n`,
                FunIdentifier: ( data: string[] ): string => `print(${ data[ 0 ] }(${ data[ 1 ] }))\n`,
                Identifier: ( data: string ): string => `print(${ data })\n`
            } )
        }
        else if ( code.type === "VariableDeclaration" )
        {
            out.cash.code = ""
            out.code += variable( code, out, {
                Kind: { let: ( data: string[] ): string => `${ data[ 0 ] }=${ data[ 1 ] }\n`, const: ( data: string[] ): string => `${ data[ 0 ] }=${ data[ 1 ] }\n` }
            } ).cash.code
        } else if ( code.type === "IfStatement" )
        {
            out = IF( code, out, {
                IF: ( data: string[] ) =>
                {
                    return `if (${ data[ 0 ] }): ${ data[ 1 ] }\n`
                }
            } )

        }
    }*/
}

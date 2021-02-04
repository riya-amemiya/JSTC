import acorn from "../../../type/type"
import fn from "../modules/function/function"
import print from "../modules/print/print"
/**
 * @module python
 * @param {acorn.Node} codes
 * @returns {acorn.OUT} 変換結果を出力
 */
export default function python ( codes: acorn.Node ): acorn.OUT
{
    let out: acorn.OUT = { code: "", cash: { code: "", return: "" } };
    for ( const code of codes.body )
    {
        if ( code.type === "FunctionDeclaration" )
        {
            out = fn( code, out, {
                Literal: ( data: string ) => `print("${ data }");`,
                BinaryExpression: ( data: string[] ) => `print(${ data[ 0 ] }${ data[ 1 ] }${ data[ 2 ] });`,
                Function: ( data: string[] ) => `def ${ data[ 0 ] }(${ data[ 1 ] }): ${ data[ 2 ] } return ${ data[ 3 ] }\n`,
                VariableDeclaration: ( data ) => `${ data[ 0 ] }=${ data[ 1 ] };`
            } )
        }
        else if ( code.type === "ExpressionStatement" )
        {
            out = print( code, out, {
                Literal: ( data: string ) => `print(${ data })\n`,
                Identifier: ( data: string[] ) => `print(${ data[ 0 ] }(${ data[ 1 ] }))\n`
            } )
        }
    }
    return out
}

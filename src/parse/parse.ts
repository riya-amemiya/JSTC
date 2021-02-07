import acorn from "../../type/type"
import { print, variable, Function, IF } from "../api/api"
/**
 * @module python
 * @param {acorn.Node} codes
 * @returns {acorn.OUT} 変換結果を出力
 */
export default function parse (
    { codes, out, conversion }: {
        codes: acorn.Node; out: acorn.OUT; conversion: {
            Function: {
                Literal: ( data: string ) => string
                BinaryExpression: ( data: string[] ) => string
                Function: ( data: string[] ) => string
                VariableDeclaration: ( data: [ string, number ] ) => string
                Kind: {
                    let: ( data: string[] ) => string
                    const: ( data: string[] ) => string
                }
            }
            Print: {
                Literal: ( data: string ) => string
                FunIdentifier: ( data: string[] ) => string
                Identifier: ( data: string ) => string
            }
            Variable: {
                Kind: {
                    let: ( data: string[] ) => string
                    const: ( data: string[] ) => string
                }
            }
            IF: ( data: string[] ) => string
        }
    } ): acorn.OUT
{
    for ( const code of codes.body )
    {
        if ( code.type === "FunctionDeclaration" )
        {
            out = Function( code, out, conversion.Function )
        }
        else if ( code.type === "ExpressionStatement" )
        {
            out = print( code, out, conversion.Print )
        }
        else if ( code.type === "VariableDeclaration" )
        {
            out.cash.code = ""
            out.code += variable( code, out, conversion.Variable ).cash.code
        } else if ( code.type === "IfStatement" )
        {
            out = IF( code, out, { IF: conversion.IF } )

        }
    }
    out.code = out.cash.Function + out.code
    return out
}

import acorn from "../../../../type/type"
import { variable } from "../../../api/api"
/**
 * @module VariableDeclaration
 * @param c
 * @param out
 */
export default ( c: acorn.Body, out: { code: string, cash: { code: string, return: string, Identifier: { name: string, value: string }[] } }, conversion: { VariableDeclaration: ( data: [ string, number ] ) => string, Kind: { let: ( data: string[] ) => string, const: ( data: string[] ) => string } } ):
    {
        code: string; cash: {
            code: string; return: string; Identifier: { name: string, value: string }[]
        }
    } =>
{
    if ( c.type === "VariableDeclaration" )
    {
        out = variable( c, out, { Kind: conversion.Kind } )
    }
    return out
}
import fs from 'fs'
import python from '../parse/modes/python';
import variable from "../parse/modules/variable/variable"
import print from "../parse/modules/print/print"
import Function from "../parse/modules/function/function"
import IF from "./../parse/modules/if/if"
import ruby from '../parse/modes/ruby';
import parse from '../parse/parse';
import { Out } from "../parse/out"
/**
     *
     * @module check
     * @param {string} file
     * Check if the file exists.
     * @returns {boolean} If there is a file true
     */
function check ( file: string ): boolean
{
    let hasfaile = false;
    try
    {
        fs.statSync( file );
        hasfaile = true;
    } catch ( err )
    {
        hasfaile = false;
    }
    return hasfaile;
}
/**
 *
 * @module read
 * @param {string} file
 * read a file
 * @returns {string} Reads a file and returns it as a string
 */
function read ( file: string ): string
{
    if ( check( file ) )
    {
        return fs.readFileSync( file, 'utf8' );
    }
    return "";
}
export { check, read, python, variable, print, Function, ruby, IF, parse, Out }
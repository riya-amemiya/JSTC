import * as acorn from 'acorn';
import fs from 'fs'
import path from 'path'
import python from './parse/python';
function check(file: string): boolean
{
    let hasfaile = false;
    try
    {
        fs.statSync(file);
        hasfaile = true;
    } catch (err)
    {
        hasfaile = false;
    }
    return hasfaile;
}
function read(file: string): string
{
    if (check(file))
    {
        return fs.readFileSync(file, 'utf8');
    }
    return "";
}
const parse = acorn?.parse(read(path.resolve("test/test.js")), {
    ecmaVersion: 2020,
    allowAwaitOutsideFunction: true,
    allowImportExportEverywhere: true
})
fs.writeFileSync(path.resolve("./test/index.py"), python(parse).code, "utf8")
fs.writeFileSync(path.resolve("./test/test.json"), parse ? JSON.stringify(parse) : "{}", 'utf8')
console.log(python(parse));

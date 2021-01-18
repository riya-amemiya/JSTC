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
if (!process.argv[2])
{
    console.log("引数が不足してます\n第一引数にファイルパスを指定して下さい");
}
if (process.argv.findIndex(item => item === "-t") !== 2)
{
    const parse = acorn?.parse(read(path.resolve("test/test.js")), {
        ecmaVersion: 2020,
        allowAwaitOutsideFunction: true,
        allowImportExportEverywhere: true
    })
    if (process.argv.findIndex(item => item === "-t") !== -1)
    {
        fs.writeFileSync(path.resolve(process.argv[2]), parse ? JSON.stringify(parse) : "{}", 'utf8')
    }
    fs.writeFileSync(path.resolve(process.argv[2]), python(parse).code, "utf8")
    console.log(python(parse));
} else
{
    console.log("第一引数にはファイルパスを指定して下さい");
}

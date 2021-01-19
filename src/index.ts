import * as acorn from 'acorn';
import fs from 'fs'
import path from 'path'
import python from './parse/python';

/**
 *
 * @param {string} file
 * Check if the file exists.
 * @returns {boolean} If there is a file true
 */
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

/**
 *
 * @param {string} file
 * read a file
 * @returns {string} Reads a file and returns it as a string
 */
function read(file: string): string
{
    if (check(file))
    {
        return fs.readFileSync(file, 'utf8');
    }
    return "";
}

//引数のチェック
if (!process.argv[2])
{
    console.log("引数が不足してます\n第一引数にファイルパスを指定して下さい");
}

//第1引数のチェック
if (process.argv.findIndex(item => item === "-t") !== 2)
{
    /**
     * @const
     * @type {any}
     */
    const parse: any = acorn?.parse(read(path.resolve(path.resolve(process.argv[2]))), {
        ecmaVersion: 2020,
        allowAwaitOutsideFunction: true,
        allowImportExportEverywhere: true
    })
    /**
     * @type {string}
     */
    //出力先の変数
    let out: string = "jstc＿build"
    //outオプションの確認
    if (process.argv.findIndex(item => item === "-out") !== -1 && process.argv.findIndex(item => item === "-out") !== 2)
    {
        if (!process.argv[process.argv.findIndex(item => item === "-out") + 1])
        {
            console.log("引数が不足しています");
        } else
        {
            out = process.argv[process.argv.findIndex(item => item === "-out") + 1]
        }
    }
    //versionオプションの確認
    (async function ()
    {
        if (process.argv.findIndex(item => item === "-v") !== -1 && process.argv.findIndex(item => item === "-v") !== 2)
        {
            const v = await import("./../package.json")
            console.log(v.version);
        }
    }())
    //out先のフォルダが無かったら作成
    if (!check(path.resolve(out)))
    {
        fs.mkdir(path.resolve(out), (err): void =>
        {
            if (err)
            {
                throw err;
            }
        });
    }
    //js解析結果からpythonに変換して出力
    fs.writeFileSync(`${path.resolve(out)}/index.py`, python(parse).code, "utf8")
    console.log(python(parse).code);
    //解析結果出力オプションの確認
    if (process.argv.findIndex(item => item === "-t") !== -1)
    {
        fs.writeFileSync(path.resolve(`${path.resolve(out)}/build.json`), parse ? JSON.stringify(parse) : "{}", 'utf8')
    }
} else
{
    console.log("第一引数にはファイルパスを指定して下さい");
}

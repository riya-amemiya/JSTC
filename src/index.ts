import * as acorn from 'acorn';
import fs from 'fs'
import path from 'path'
import { check, read, python, go } from "./api/api"
/**
 * Converting Javascript to Python
 * @module main
 */
const main = (): void =>
{

    //引数のチェック
    if ( !process.argv[ 2 ] )
    {
        console.log( "引数が不足してます\n第一引数にファイルパスを指定して下さい" );
    }

    //第1引数のチェック
    if ( process.argv.findIndex( item => item === "-t" ) !== 2 )
    {
        /**
         * @const
         * @type {any}
         */
        const parse: any = acorn?.parse( read( path.resolve( path.resolve( process.argv[ 2 ] ) ) ), {
            ecmaVersion: 2020,
            allowAwaitOutsideFunction: true,
            allowImportExportEverywhere: true
        } )
        /**
         * @type {string}
         */
        //出力先の変数
        let out: string = "jstc_build";

        //versionオプションの確認
        if ( process.argv.findIndex( item => item === "-v" ) !== -1 && process.argv.findIndex( item => item === "-v" ) !== 2 )
        {
            ( async function (): Promise<void>
            {
                const v = await import( "./../package.json" )
                console.log( v.version );
            }() )
        }
        //out先のフォルダが無かったら作成
        if ( !check( path.resolve( out ) ) )
        {
            fs.mkdir( path.resolve( out ), ( err ): void =>
            {
                if ( err )
                {
                    throw err;
                }
            } );
        }

        //outオプションの確認
        if ( process.argv.findIndex( item => item === "-out" ) !== -1 && process.argv.findIndex( item => item === "-out" ) !== 2 )
        {
            if ( !process.argv[ process.argv.findIndex( item => item === "-out" ) + 1 ] )
            {
                console.log( "引数が不足しています" );
            } else
            {
                out = process.argv[ process.argv.findIndex( item => item === "-out" ) + 1 ]
            }
        }
        if ( process.argv.findIndex( item => item === "-not" ) === -1 )
        {
            let mode;
            if ( process.argv.findIndex( item => item === "-mode" ) !== -1 && process.argv.findIndex( item => item === "-mode" ) !== 2 )
            {
                if ( !process.argv[ process.argv.findIndex( item => item === "-mode" ) + 1 ] )
                {
                    console.log( "引数が不足しています" );
                } else
                {
                    mode = process.argv[ process.argv.findIndex( item => item === "-mode" ) + 1 ]
                    if ( mode == "py" || mode == "python" )
                    {
                        //js解析結果からpythonに変換して出力
                        fs.writeFileSync( `${ path.resolve( out ) }/index.py`, python( parse ).code, "utf8" )
                        console.log( python( parse ).code );
                    }
                    if ( mode == "go" )
                    {
                        //js解析結果からpythonに変換して出力
                        fs.writeFileSync( `${ path.resolve( out ) }/index.go`, go( parse ).code, "utf8" )
                        console.log( go( parse ).code );
                    }
                }
            }
        }

        //解析結果出力オプションの確認
        if ( process.argv.findIndex( item => item === "-t" ) !== -1 )
        {
            fs.writeFileSync( path.resolve( `${ path.resolve( out ) }/build.json` ), parse ? JSON.stringify( parse ) : "{}", 'utf8' )
        }

    }
    else
    {
        console.log( "第一引数にはファイルパスを指定して下さい" );
    }
}
export { main }
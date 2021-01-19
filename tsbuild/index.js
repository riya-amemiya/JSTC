import * as acorn from 'acorn';
import fs from 'fs';
import path from 'path';
import python from './parse/python';
function check(file) {
    var hasfaile = false;
    try {
        fs.statSync(file);
        hasfaile = true;
    }
    catch (err) {
        hasfaile = false;
    }
    return hasfaile;
}
function read(file) {
    if (check(file)) {
        return fs.readFileSync(file, 'utf8');
    }
    return "";
}
if (!process.argv[2]) {
    console.log("引数が不足してます\n第一引数にファイルパスを指定して下さい");
}
if (process.argv.findIndex(function (item) { return item === "-t"; }) !== 2) {
    var parse = acorn === null || acorn === void 0 ? void 0 : acorn.parse(read(path.resolve(path.resolve(process.argv[2]))), {
        ecmaVersion: 2020,
        allowAwaitOutsideFunction: true,
        allowImportExportEverywhere: true
    });
    var out = "jstc＿build";
    if (process.argv.findIndex(function (item) { return item === "-out"; }) !== -1) {
        if (!process.argv[process.argv.findIndex(function (item) { return item === "-out"; }) + 1]) {
            console.log("引数が不足しています");
        }
        else {
            out = process.argv[process.argv.findIndex(function (item) { return item === "-out"; }) + 1];
        }
    }
    if (process.argv.findIndex(function (item) { return item === "-v"; }) !== 2) {
        console.log(JSON.parse(read(path.resolve("package.json"))).version);
    }
    if (!check(path.resolve(out))) {
        fs.mkdir(path.resolve(out), function (err) {
            if (err) {
                throw err;
            }
        });
    }
    fs.writeFileSync(path.resolve(out) + "/index.py", python(parse).code, "utf8");
    console.log(python(parse).code);
    if (process.argv.findIndex(function (item) { return item === "-t"; }) !== -1) {
        fs.writeFileSync(path.resolve(path.resolve(out) + "/build.json"), parse ? JSON.stringify(parse) : "{}", 'utf8');
    }
}
else {
    console.log("第一引数にはファイルパスを指定して下さい");
}
//# sourceMappingURL=index.js.map
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
    var parse = acorn === null || acorn === void 0 ? void 0 : acorn.parse(read(path.resolve("test/test.js")), {
        ecmaVersion: 2020,
        allowAwaitOutsideFunction: true,
        allowImportExportEverywhere: true
    });
    if (process.argv.findIndex(function (item) { return item === "-t"; }) !== -1) {
        fs.writeFileSync(path.resolve(process.argv[2]), parse ? JSON.stringify(parse) : "{}", 'utf8');
    }
    fs.writeFileSync(path.resolve(process.argv[2]), python(parse).code, "utf8");
    console.log(python(parse));
}
else {
    console.log("第一引数にはファイルパスを指定して下さい");
}
//# sourceMappingURL=index.js.map
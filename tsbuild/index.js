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
var parse = acorn === null || acorn === void 0 ? void 0 : acorn.parse(read(path.resolve("test/test.js")), {
    ecmaVersion: 2020,
    allowAwaitOutsideFunction: true,
    allowImportExportEverywhere: true
});
fs.writeFileSync(path.resolve("./test/index.py"), python(parse).code, "utf8");
fs.writeFileSync(path.resolve("./test/test.json"), parse ? JSON.stringify(parse) : "{}", 'utf8');
console.log(python(parse));
//# sourceMappingURL=index.js.map
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as acorn from 'acorn';
import fs from 'fs';
import path from 'path';
import { check, read, python } from "./api/api";
var main = function () {
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
        if (process.argv.findIndex(function (item) { return item === "-v"; }) !== -1 && process.argv.findIndex(function (item) { return item === "-v"; }) !== 2) {
            (function () {
                return __awaiter(this, void 0, void 0, function () {
                    var v;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, import("./../package.json")];
                            case 1:
                                v = _a.sent();
                                console.log(v.version);
                                return [2];
                        }
                    });
                });
            }());
        }
        if (!check(path.resolve(out))) {
            fs.mkdir(path.resolve(out), function (err) {
                if (err) {
                    throw err;
                }
            });
        }
        if (process.argv.findIndex(function (item) { return item === "-out"; }) !== -1 && process.argv.findIndex(function (item) { return item === "-out"; }) !== 2) {
            if (!process.argv[process.argv.findIndex(function (item) { return item === "-out"; }) + 1]) {
                console.log("引数が不足しています");
            }
            else {
                out = process.argv[process.argv.findIndex(function (item) { return item === "-out"; }) + 1];
            }
        }
        if (process.argv.findIndex(function (item) { return item === "-not"; }) === -1) {
            fs.writeFileSync(path.resolve(out) + "/index.py", python(parse).code, "utf8");
            console.log(python(parse).code);
        }
        if (process.argv.findIndex(function (item) { return item === "-t"; }) !== -1) {
            fs.writeFileSync(path.resolve(path.resolve(out) + "/build.json"), parse ? JSON.stringify(parse) : "{}", 'utf8');
        }
    }
    else {
        console.log("第一引数にはファイルパスを指定して下さい");
    }
};
export { main };
//# sourceMappingURL=index.js.map
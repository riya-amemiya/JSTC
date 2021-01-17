"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var acorn = _interopRequireWildcard(require("acorn"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _python = _interopRequireDefault(require("./parse/python"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function check(file) {
  var hasfaile = false;

  try {
    _fs["default"].statSync(file);

    hasfaile = true;
  } catch (err) {
    hasfaile = false;
  }

  return hasfaile;
}

function read(file) {
  if (check(file)) {
    return _fs["default"].readFileSync(file, 'utf8');
  }

  return "";
}

var parse = acorn === null || acorn === void 0 ? void 0 : acorn.parse(read(_path["default"].resolve("test/test.js")), {
  ecmaVersion: 2020,
  allowAwaitOutsideFunction: true,
  allowImportExportEverywhere: true
});

_fs["default"].writeFileSync(_path["default"].resolve("./test/index.py"), (0, _python["default"])(parse).code, "utf8");

_fs["default"].writeFileSync(_path["default"].resolve("./test/test.json"), parse ? JSON.stringify(parse) : "{}", 'utf8');

console.log((0, _python["default"])(parse));
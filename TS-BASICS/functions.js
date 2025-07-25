"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printFormat = exports.format = exports.addStrings = void 0;
// definine functions
// this function takes 2 values 
function addNumbers(a, b) {
    return a + b;
}
// step to import your functions to another file 
exports.default = addNumbers;
// as the default export from this module
// declaring your funtions CONST functions
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = ""; }
    return "".concat(str1, " ").concat(str2);
};
exports.addStrings = addStrings;
// str2: string is the declaration so after we can set it to the default value 
//Union Types
// a function where you want a certain parameter
// this parameter is to be of one of a set of different types
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
// void functions = where you are not actually going to return anything at all
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fecthData = exports.printFormat = exports.format = exports.addStrings = void 0;
exports.getName = getName;
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
// Functions that return Promises
var fecthData = function (url) { return Promise.resolve("Data from ".concat(url)); };
exports.fecthData = fecthData;
// REST Parameters when multiple arguments and the coalesce them into an array 
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(''));
}
function getName(user) {
    var _a, _b;
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : "first", " ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : "last");
}
//ex) user.first   adding a chaining operator ? user?.first
// this is so that the user is defined before we de-reference it 
// ? ?? is like a trunary 

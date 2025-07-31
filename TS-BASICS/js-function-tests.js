// import the function ex) getName
const { getName } = require("./functions");

console.log(
    getName({
        first: "a",
        last: "b",
    }) 
);
// node js-functions-tests.js to run this 
// next complie npx tsc functions.ts   this complies it into js 

// // Generic function 
//     function myNewFunction<T> ()
//     {
// return "string" as T
//     }
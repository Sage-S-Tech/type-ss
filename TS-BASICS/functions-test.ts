// this is where we will import our functions to test them

// named export import addNumbers, {}
// import addNumbers from './functions'
// console.log(addNumbers(1,2))

// Destructured imports
import addNumbers, {addStrings} from './functions'
console.log(addNumbers(1, 2))
console.log(addStrings("a", "b"));
console.log(addStrings("a"));

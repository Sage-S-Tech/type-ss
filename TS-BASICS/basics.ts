let userName: string = "Jack"
let hasLoggedIn: boolean = true;

userName += " Herrington ";

console.log(userName);

let myNumberr: number = 10;

let myRegex: RegExp = /foo/;

//array Types  Typing Arrays
// [] to de-reference an array to tell you that this is an array
const names: string[] = userName.split("")
const myValues: Array<number> = [1,2,3];


// Typying Objects 
interface Person 
{
    frist: string;
    last: string;
}


const myPerson: Person = {
    frist: "Jack",
    last: " Herrington "
} 

// objects as mapps 
// using a utility type    one ex) Record
//defingin the key type and value type 
const ids: Record<number, string> =  {
    10: "a",
    20: "b"
}
ids[30] = "c";

// Conditionals and expressions
//will change varibale declarations
 if (ids[30] === "D") {
 }

 // lopps
 for (let i = 0; i < 10; i++) {
    console.log (i);
 }

 // for each and map 
 [1,2,3,].forEach((v => console.log));
// string template is .map((v) => `${v * 10}`);
const out: number[] = [4,5,6].map((v => v * 10));
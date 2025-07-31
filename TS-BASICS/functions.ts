// definine functions
// this function takes 2 values 
function addNumbers(a: number, b:number): number {
    return a + b;
}

// step to import your functions to another file 
export default addNumbers;
// as the default export from this module

// declaring your funtions CONST functions
export const addStrings = (str1: string, str2: string = ""): string => `${str1} ${str2}`; 
                                        // str2: string is the declaration so after we can set it to the default value 

//Union Types
// a function where you want a certain parameter
// this parameter is to be of one of a set of different types

export const format = (title: string, param: string | number ): string => 
    `${title} ${param}`;
// void functions = where you are not actually going to return anything at all
export const printFormat = (title: string, param: string | number): void => {
    console.log(format(title,param))
};

// Functions that return Promises


export const fecthData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);
// REST Parameters when multiple arguments and the coalesce them into an array 
function introduce(salutation: string, ...names:string[]): string {
    return `${salutation} ${names.join('')}`;
}
export function getName(user: {first: string; last:string}): string {
return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}

//ex) user.first   adding a chaining operator ? user?.first

// this is so that the user is defined before we de-reference it 
// ? ?? is like a trunary 
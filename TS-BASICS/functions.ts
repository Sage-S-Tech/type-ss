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
export const printFormat = (title: string, param: string | number) => {
    console.log(format(title,param))
}
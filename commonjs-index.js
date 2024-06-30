// console.log(process);

// common js files(modules) import way - old version - default function export function importing
// does not need to specify filename with .js extension in commonJs files. but in ES2015 modules, we need to specify the file extension

// const generateRandomNumber = require('./commonjs-utils');



// importing multiple modules(functions) in same file - common js
const { generateRandomnumber, celciusToFarhenheit } = require('./commonjs-utilsmulti');

console.log(`Random number: ${generateRandomnumber()}`);
console.log(`Celcius to Farhenheit: ${celciusToFarhenheit(0)}`);
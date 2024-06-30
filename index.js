// console.log(process);

// common js files(modules) import way - old version - default function export function importing
// const generateRandomNumber = require('./utils');

// importing multiple modules(functions) in same file - common js
const { generateRandomnumber, celciusToFarhenheit } = require('./utilsmulti');

console.log(`Random number: ${generateRandomnumber()}`);
console.log(`Celcius to Farhenheit: ${celciusToFarhenheit(0)}`);
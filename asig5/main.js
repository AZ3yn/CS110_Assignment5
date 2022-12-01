const prompt = require('readline-sync');
const {matrixProduct,sumOFmatrices, sumOfEachRow, countwords, trim } = require("./utilis.js");

// Ex.1
let op = [
    [2,4],
    [3,5],
]
let op1 = [
    [7,4],
    [5,6],
]

let product = matrixProduct(op, op1);
console.log(product);


// Ex.2

let x = [
    [2,4],
    [3,5],
]
let y = [
    [7,4],
    [5,6],
]
let v =sumOFmatrices(x,y);
console.log(v);

// Ex.3
let a = [
    [2,4,5],
    [6,5,8],
    [7,2,8]
]

let b = sumOfEachRow(a);
console.log(b);

let pl = prompt.question("Write a sentence to count a word('s):");
console.log(`The result is:" ${countwords(pl)}`);



let xx = prompt.question("Write a string for trimming:");
console.log(xx);
// let io = prompt()
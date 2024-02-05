// program to find the product of three number and output the sign of it

const input = require(`prompt-sync`)();

let a = Number(input("Enter the number 1: "));
let b = Number(input("Enter the number 2: "));
let c = Number(input("Enter the number 3: "));

let product = a*b*c;

if(product == 0)
   console.log("The sign is neither + or -");
else if(product<0)
   console.log("The sign is -");
else
   console.log("The sign is +");

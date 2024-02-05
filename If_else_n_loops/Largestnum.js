/*Program to find the largest integer between two number */

const input = require(`prompt-sync`)();

//console.log("Enter the number a and b: ");
let a = Number(input("Enter first number: "));
let b = Number(input("Enter second number: "));

if(a>b)
{
    console.log("a is largest");
}
else if(a==b)
{
   console.log("a and b is equal");
}
else
{
    console.log("b is largest");
}




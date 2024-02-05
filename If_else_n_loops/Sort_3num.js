// program to sort 3 number using if else , in decending order

const input = require(`prompt-sync`)();

let a = Number(input("Enter first number: "));
let b = Number(input("Enter second number: "));
let c = Number(input("Enter third number: "));

if(a>b && a>c)
{
    if(b>c)
    {
        console.log(`output: ${a} ,${b} ,${c}`);
    }
    else
    {
        console.log(`output: ${a} ,${c} ,${b}`);
    }
}

else if(b>c && b>a)
{
    if(a>c)
    {
        console.log(`output: ${b} ,${a} ,${c}`);
    }
    else
    {
        console.log(`output: ${b} ,${c} ,${a}`);
    }
}
else
{
    if(a>b)
    {
        console.log(`output: ${c} ,${a} ,${b}`);
    }
    else
    {
         console.log(`output: ${c} ,${b} ,${a}`);
    }
}
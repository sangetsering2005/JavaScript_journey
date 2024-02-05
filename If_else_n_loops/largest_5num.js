// program to find the largest of five numbers using conditional statement

const input = require(`prompt-sync`)();

let a = Number(input("Enter number one: "));
let b = Number(input("Enter number two: "));
let c = Number(input("Enter number three: "));
let d = Number(input("Enter number four: "));
let e = Number(input("Enter number five: "));

//  let max1,max2,max;

// if(a>b)
//    max1 = a;
// else
//    max1 = b;

// if(c>d)
//    max2 = c;
// else
//    max2 = d;

// if(max1>max2)
//      max = max1;
// else
//      max = max2;

// console.log("Largest among five number is :",max>e?max:e);

if (a > b && a > c && a > d && a > e)
    console.log("Largest is : ", a);

else if (b > c && b > d && b > e)
    console.log("Largest is : ", b);
else if (c>d && c > e)
    console.log("Largest is : ", c);
else if (d > e)
    console.log("Largest is : ", d);
else
    console.log("Largest is : ", e);




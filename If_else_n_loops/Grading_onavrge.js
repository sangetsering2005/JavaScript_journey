/* 
program to compute the average of marks obtained and print out the grade based on following category
Range	Grade
<70	     D
<80	     C
<90	     B
<100     A  
<60	     F

*/

const input = require(`prompt-sync`)();

let a = Number(input("Enter the marks of first student: "));
let b = Number(input("Enter the marks of second student: "));
let c = Number(input("Enter the marks of third student: "));
let d = Number(input("Enter the marks of fourth student: "));
let e = Number(input("Enter the marks of fifth student: "));

let average = (a + b + c + d + e) / 5;

if (average < 60)
    console.log(" F ");
else if (average < 70)
    console.log(" D ");
else if (average < 80)
    console.log(" C ");
else if (average < 90)
    console.log(" B ");
else
    console.log(" A ");

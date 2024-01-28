//                        Assignment question 

//  values and Datatypes

//Question 1:

/* There are two category of datatypes in javascript :

    A. Primitive
      There are seven types of it:

        1. String :  "This is Mr. sange. And I learning JavaScript language"
        2. Number :   
                    i)int
                          exm; 76,89,2,1,5
                    ii)Float
                          exm; 67.8, 3.145, 2.000
        3. Bigint:
                    It inlcude the large digit numbers such as:  88888888888888999800n,

        4. Boolean:
                    It has only two value True and False.
                         And true is represented as __1
                         False is represented as___0

                         exm; a>b__will evalutes to boolean values only such that the result can either be true or false.
        5. Undefined:
                     A value not defined  for a varaible in the program is known as undefined. 
                          const n;
                          console.log(n)         -----Null
        6. Null:
                    It is datatype to represent value of emptiness or nothingness. 
                        for example: null

        7. Symbol:
                    It is datatype that represent the uniqueness among variables:
                    Exam ;  symbol("sange");


    B. Non-primitive
       It includes following datatypes
         1. Object:  It contains the key value pair.
                     const books
                     {
                        author: "sange",
                        price: $450,
                        ISBN: 993000002345n
                     }

         2. Function:    Function print()
                         {
                            console.log("Hello World!!!");
                         }

         3. Array:     It represnt a collection of data.
                       list = [1,2,3,3,4,4,4];


*/

//Question 2:

// Create an Array of 10 products that you have recently  purchased or viewed on an e-commerce site.

// const products=["iphone","studytable","lamp","bag","trousers","shirts","Air gun","Laptop","Drone","Sun glasses"];

// console.log(products);

//Question 3:

// const Register = {1: "sange",2:"tsering",3:"Lobsang",4:"Tashi",5:"Jampa"};

// console.log(Register);


//            Variables and typeof

//question: 1

// let number = 89;

// console.log(`${number} : typeof ${typeof number }`);

// let name = "sange";

// console.log(`${name} : typeof ${typeof name }`);

// let ISBN = 3456111089n;

// console.log(`${ISBN} : typeof ${typeof ISBN }`);

// let yes = true;

// console.log(`${yes} : typeof ${typeof yes }`);

// let unknown;

// console.log(`${unknown} : typeof ${typeof unknown }`);

// let empty = null;

// console.log(`${empty} : typeof ${typeof empty }`);

// const uniqueness = Symbol("X_man");

// console.log(uniqueness , "typeof" ,typeof (uniqueness) );

// const books = {Bname:"Art of living",Author:"HH Dalai lama",phone: 9402456785,prince:589};

// console.log(books,typeof books);


// function printf()

// {

//     console.log("Hello world");

// }

// printf();

// const serial_no = [1,2,3,4,5,6,7,8,9,10];

// console.log(`${serial_no} : typeof ${typeof serial_no }`);

//question : 2

//   valid varibale
// let Goodboy1 = "sange";  //output: sange

// console.log(Goodboy1);
// let kindNess_point;      //output: Undefine
// console.log(kindNess_point);  

// invalid vriable

// let Good boy1 = "sange";  // SyntaxError: Unexpected identifier
// console.log(Good boy`1`);
// let 90shero = "APJ";       //SyntaxErroe: Unexpected identifier
// console.log(90hero);


//            Operators 

// 1.  Write a program that prints the multiplication table in the textbook format of any number specified

// let N = 2;
// let i = 1;

// console.log(`${N} * ${i} = ${N*(i++)}`);
// console.log(`${N} * ${i} = ${N*(i++)}`);
// console.log(`${N} * ${i} = ${N*(i++)}`);
// console.log(`${N} * ${i} = ${N*(i++)}`);
// console.log(`${N} * ${i} = ${N*(i++)}`);
// console.log(`${N} * ${i} = ${N*(i++)}`);
// console.log(`${N} * ${i} = ${N*(i++)}`);
// console.log(`${N} * ${i} = ${N*(i++)}`);
// console.log(`${N} * ${i} = ${N*(i++)}`);
// console.log(`${N} * ${i} = ${N*(i++)}`);

//2. Write a program to perform all the arthematic operation {except increment and decrement operators} of Javascript of any two numbers stored in the variables num1 and num2. Also, print the results to the console. 

// let num1 = 8, num2 = 9;

// console.log(`Addition of number ${num1} + ${num2} =  ${num1+num2}`);
// console.log(`subtraction of number ${num1} - ${num2} =  ${num1-num2}`);

// console.log(`Multiplication of number ${num1} * ${num2} =  ${num1*num2}`);
// console.log(`division of number ${num1} / ${num2} =  ${num1/num2}`);

// console.log(`exponent of number ${num1} ** ${num2} =  ${num1**num2}`);
// console.log(`Modolus of number ${num1} % ${num2} =  ${num1%num2}`);

// 3.Write a program to find out the perimeter and area of a rectangle. Print the result to the console.

// let Length = 6,Breath = 5;
// let perimeter = 2*(Length + Breath);
// let Area = Length * Breath;
// console.log("The perimeter of rectangle ",perimeter);
// console.log("Area of rectangle ",Area);

//4. Write a program to demostrate the results of comparison operators. Note that both the truth and false condition for each operator must be specified.

// let a = 5,b=4;
// console.log(a , b);

// console.log("a is Greater b",a>b);
// console.log("a is smaller b",a<b);
// console.log("a is greater or equal to b",a>=b);
// console.log("a is dmaller or equal to b",a<=b);
// console.log("a is not equal to b",a!=b);
// console.log("a is equal b",a==b);
// console.log("a is equal equal b",a===b);
// console.log("b is smaller or equal to b",b<=a);
// console.log("b is greate or equal to b",b>=a);

// what are the conditions,if,if-else,if-else-if

/*1. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the traffic light is red print the vehicle must stop*/

// let light = "White";

// if(light == "Red")
// {
//     console.log("Stop!!");
// }
// else if(light == "Yellow")
// { 
//     console.log("Please have patient and wait for go.");
// }
// else if(light == "Green")
// {
//     console.log("Go.. Dear");
// }
// else
// {
//     console.log("Invalid traffic light");
// }


//2. Write a program to print the largest 2 numbers.

// let num1 = 45,num2 = 78;

// num1>num2?console.log(num1,"is greater"):console.log(num2,"is greater");

// if(num1>num2)
// {
//      console.log("num1 is greater");
// }
// else
// {
//      console.log("num2 is greater");
// }

//3. Wrtie a program to that takes a number as input and outputs "Fizz" if it is divisible by 3, and "Buzz " if it is divisible by 5, and "FizzBuzz" is it is divisible by both 3 and 5. Note that any number can be passed and not restricted to the numbers divisible by 3 or 5.

// const input = require(`prompt-sync`)();

// const num = Number(input());

// if((num % 3 == 0) && (num %5 == 0))
// {
//     console.log("FizzBuzz");
// }

// else if((num%3 == 0))
// {
//     console.log("Fizz");

// }
// else if((num %5 == 0))
// {
//     console.log("Buzz");

// }
// else
// {
//     console.log("Not divisible by either 3 or 5");

// }

//         Switch Case

//1. Write program to take day a input and print the number of days left till weekend

// const input = require(`prompt-sync`)();

// const day = input();

// switch (day)
//  {
//     case "Sunday": console.log("Six more days untill weekedend");
//         break;
//     case "Monday": console.log("five more days untill weekedend");
//         break;
//     case "Tuesday": console.log("four more days untill weekedend");
//         break;
//     case "Wednesday": console.log("three more days untill weekedend");
//         break;
//     case "Thursday": console.log("two more days untill weekedend");
//         break;
//     case "Friday": console.log("one more days untill weekedend");
//         break;
//     case "Saturday": console.log("its weekedend");
//         break;
//     default: console.log("Invalid day input");

// }

//2.Write a program to take a number between 1 - 12 and output the the corresponding the monthd of the year.

// const input = require(`prompt-sync`)();

// const month = Number(input());

// switch(month)
// {
//     case 1:
//              console.log("January");
//              break;

//     case 2:
//         console.log("Febuary");
//         break;

//     case 3:
//         console.log("March");
//         break;

//     case 4:
//         console.log("April");
//         break;

//     case 5:
//         console.log("May");
//         break;

//     case 6:
//         console.log("June");
//         break;

//     case 7:
//         console.log("July");
//         break;

//     case 8:
//         console.log("August");
//         break;

//     case 9:
//         console.log("September");
//         break;

//     case 10:
//         console.log("October");
//         break;

//     case 11:
//         console.log("November");
//         break;

//     case 12:
//         console.log("December");
//         break;

//     default:
//         console.log("Invalid input");
    
// }

// Ternary  condition

//1. Write a program that takes in a number and outputs whether it is positive,negavtive, or zero. 


// const input = require(`prompt-sync`)();
// const num = Number(input());

// num ==0?console.log("zero"):(num>0)?console.log("Positive"):console.log("Negative"); 

//2. Create a program that takes in two numbers and prints the larger one.

// const input = require(`prompt-sync`)();
// const num1 = Number(input());
// const num2 = Number(input());

// num1>num2?console.log(num1,"is greater"):console.log(num2,"is greater");


//                LOOPS

//1.write a program that generates the multiplication table in the textbook format of a given number

// const input = require(`prompt-sync`)();

// const N = Number(input());

// for(let i = 1; i<=10; i++)
// {
//     console.log(`${N} X ${i} = ${N*i}`);
// }

//2. Write a program that prints all the positive even numbers till the numbers specified

const input = require(`prompt-sync`)();

const N = Number(input());

for(let i = 1;i<=N;i++)
{
    if(i%2==0)
    {
         console.log(i);
    }
}


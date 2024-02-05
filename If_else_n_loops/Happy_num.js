/* program to print the happy number : 
   1. A numbers' digit square sums upto one is called happy number.
   2. And if the number doesn't makes till 1 then it is unhappy number.
   
   */

// const input = require(`prompt-sync`)();

// let N = Number(input("Enter the number of happy Number you want: "));


// // function to assist the program

// function Numbercount(num)
// {
//    let count = 0;
//    while (num > 0)
//    {
//         count++;
//         num = Math.floor(num / 10);
//    }

//    return count++;
// }


// function checking(num,limit)
// {
//     if(num == limit)
//     {
//        return 0;
//     }

//     return num;
// }

// //main program
// let i = 0, sum = 0, value = 1;

// while(i < 5) 
// {
//    sum = 0;
//    num =value;

//    // making another copy
//    num = value * value;
   
//    if (num >= 10)
//    {
//       //counting the number digit will be benificail

//       let count = 0;
//       count = Numbercount(num);

//       let check = 0; //checking the pass for digit
//       while (num > 10) 
//       {
//          let k;
//          k = num % 10;
//          sum = sum + k ** 2;
//          num = Math.floor(num / 10);
//          check = checking(check,count);

//          //checking whether all the digit are operated or not
//          if (check == 0) 
//          {
//              num = sum;

//              count = Numbercount(num);

//              sum = 0;
//          }

//       }
//    }

//    else
//    {
//       sum = value;
//    }

//    if (sum == 1) 
//    {
//       console.log(value, " ");
//       i++;
//    }

//    value++;
// }



// Function to check if a number is a happy number
function happy_number(num) {
   var m, n;
   var c = [];

   // Continue loop until the number becomes 1 or enters a cycle
   while (num !== 1 && c[num] !== true) {
       c[num] = true;
       m = 0;

       // Calculate the sum of the squares of digits
       while (num > 0) {
           n = num % 10;
           m += n * n;
           num = (num - n) / 10;
       }

       num = m;
   }

   return (num === 1);
}

// Variables to track the count and current number
const input = require(`prompt-sync`)();

var cnt = Number(input("Enter the limit: ")); 

var num = 1;
var f5 = '';

// Find the first 5 happy numbers
while (cnt-- > 0) {
   while (!happy_number(num))
       num++;

   f5 = f5 + (num + ", ");
   num++;
}
console.log('First 5 happy numbers are: ' + f5); 

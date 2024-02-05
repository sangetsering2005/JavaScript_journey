/* program to print the Fizz and Buzz acoording to the condition
   1. Multiple of 3 as Fizz
   2. Multiple of 5 as Buzz
   3. Multiple of 3 and 5 as FizzBuzz
   */

   const input = require(`prompt-sync`)();

   let N = Number(input("Enter the range :"));

   for(let i = 0;i<=N;i++)
   {
       if(i%3 == 0 && i%5 == 0)
       {
          console.log(i," FizzBuZZ");
       }
       else if(i%3 == 0)
       {
          console.log(i," Fizz");
       }
       else if(i%5 == 0)
       {
          console.log(i," Buzz");
       }
       else 
          console.log(i);
   }
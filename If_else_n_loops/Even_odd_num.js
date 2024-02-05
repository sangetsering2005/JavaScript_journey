//program to print the range of number with the description of it as even or odd

const input = require(`prompt-sync`)();
let N = Number(input("Enter the upper range: "));

for(let i=0;i<=N;i++)
{
    if(i%2 == 0)
    {
        console.log(`${i} is Even `);
    }
    else
       console.log(`${i} is Odd `);
}
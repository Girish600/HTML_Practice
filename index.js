// three types of variables : var, let and const

// var name= 0;
// name= 20;
// console.log(name);

// const name= 0;
// name= 10;
// console.log(name);

// console.log(fun1())

//  function fun1(){
//     let a= 10;
//     console.log(a);
//     return a
//  }
//  fun1()

// operators

// Addition(+): Combines two numbers to get their sum.

// let a=7;
//     b= 3;
//     c= (a+b);
//     console.log(c)

// Subtraction (-): Finds the difference between two numbers by subtracting one from the other.

// let a=15;
//     b=8;
//     c=(a-b);
//     console.log(c)

// Multiplication(*): Multiplies two numbers to get their product.

// let a=6;
//     b=4;
//     c=(a*b);
//     console.log(c)

// Division (/): Divides one number by another to get the quotient.

// let a=20;
//     b=4;
//     quotient=(a/b)
//     console.log(quotient);

// Modulus(%): Returns the remainder of the division of one number by another.

// let a=10;
//     b=3;
//     remainder=(a/b)
//     console.log(remainder)

// Increament (++): Increases a number by one.

// let a=2;
//     b=3;
//     c=4;
//     d=(a+b);
//     e=(d*c);
//     console.log(e)

// let a=5;
//     b=10;
//     c=15;
//     d=(
//         (a+b+c)/3
//     )
//     console.log(d)

// Decrement(--): Decreases a number by one.

// let a=7;
//     b=5;
//     c=++a;
//     d=c*b;
//     console.log(d)

let a = 7;
b = 5;
c = --a * b;
console.log(c);

const users = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    age: 28,
    balance: 5000,
    isActive: true,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    age: 34,
    balance: 3000,
    isActive: false,
  },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@example.com",
    age: 22,
    balance: 7000,
    isActive: true,
  },
  {
    id: 4,
    name: "Diana",
    email: "diana@example.com",
    age: 29,
    balance: 4000,
    isActive: false,
  },
  {
    id: 5,
    name: "Eve",
    email: "eve@example.com",
    age: 35,
    balance: 10000,
    isActive: true,
  },
];

// console.log(users);

// let arr=[2,3,4, [4,5,6,7]]

// function checkElement(arr, num, num2, num3){
//   if (arr.includes(num)){
//     console.log
//   } else {

//   }
// }

// Q1- find the active user through filter funtion

// let a= users.filter((active)=>active.isActive);
// console.log(a);

// Q2- find sum of all balance through reduce method

// let b= users.reduce((a,b)=> a+b.balance,0);
// console.log(b);

// Q3- find user by email

// console.log(users[users.length-3].email);

// Q4- Sort users by age

// let a=users.sort((a,b)=>a.age-b.age);
// // users.sort((a,b)=>a.age-b.age);
// console.log(a);

// Q5- icrease value 10% through map function

// a= users.map((bal)=> bal.balance);

// console.log(a);

// Q6- check user age is under 25 through some method

// let a= users.some(users=>users.age>25);
// console.log(a);

// Q7- find balance above 2000:

// let b=users.filter((bal)=>bal.balance>2000);
// console.log(b);

// Q8:- get a list of username through map:

// let b= users.map((nam)=>nam.name);
// console.log(b);

// Q9- count users with a balace atleast 5000

// let b= users.filter((bal)=> bal.balance>=5000);
// console.log(b);

// Q10: Remove user by ID is 3

// let b= users.filter((nam)=> nam.id !=3);
// console.log(b);

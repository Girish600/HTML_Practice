// Javascript timing and arthmetic practices

// delayed message display

// const timer= setInterval(()=>{
//     let msg= new Date();
//     console.log(`hello world!!`)
// },3000);

// function that logs the current time to the console every 2 sec, stopping after 10 sec.

// const timer=setInterval(()=>{
//     console.log(`Hello World!!`);
// },2000);

// setTimeout(()=>{
//     clearInterval(timer)
// },10000)

// const timer= setInterval(()=>{
//     let date= new Date;
//     console.log(`current time=${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
// },2000)

// setTimeout(()=>{
//     clearInterval(timer);
// },10000);

// delayed sum calcution

// let a=10;
//     b=15;

// const total= setInterval(()=>{
//     let c=a+b;
//     console.log(c)
// },2000);
// setTimeout(()=>{
//     clearInterval(total)
// },2000);

// Countdown timer

// function count(start, end) {
//   let current = start;
//   const intervalId = setInterval(() => {
//     console.log(current);
//     if (current === end) {
//       clearInterval(intervalId);
//       setTimeout(()=>{
//         console.log("times up...")
//       },1000)
//     }
//     current--;
//   },1000);
// };
// count(5, 0)

// Delayed multiplication

// function multiply(num1,numb)

let a= 10;
b=12;
const multiply = setInterval(()=>{
let c=a*b;
console.log(c)
},2000);
setTimeout(()=>{
clearInterval(multiply)
},2000);
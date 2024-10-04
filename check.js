// Microtask - Priority Job
// Macrotask - Queued for future tick of the event loop 

// console.log('start');

// setTimeout(() => {f
//           console.log('Macrotask 1');
// }, 0);

// setTimeout(() => {
//           console.log('Macrotask 2');
// }, 0);

// Promise.resolve().then(() => {
//           console.log('Microtask 1');
// });

// Promise.resolve().then(() => {
//           console.log('Microtask 2');
// });

// console.log('End');

// Example with Event Loop, macrotask and Microtasks 

// -> Closure 

// function outerFunction(outerVariable){
//           return function innerFunction(innerVariable){
//                     console.log(`outer Variable: ${outerVariable}`);
//                     console.log(`inner variable: ${innerVariable}`);
//           };
// }

// const newFunction = outerFunction('outside');
// newFunction('inside');

// Data Privicy ---------------------------------------

// function counter (){
//           let count = 0;
//           return function(){
//                     count++;
//                     console.log(count);
//           };
// }

// const increment = counter();
// increment();//1
// increment();//2

// Currying-----------------------------------------------

// function multiply(a) {
//           return function(b) {
//             return function(c) {
//               return a * b * c;
//             };
//           };
//         }
        
//         const result = multiply(2)(3)(4);
//         console.log(result);  // 24

        
// Memoization -----------------------------------

// function memoizedFibonacci() {
//           const cache = {};
//           return function fib(n) {
//             if (n < 2) return n;
//             if (cache[n]) return cache[n];
//             cache[n] = fib(n - 1) + fib(n - 2);
//             return cache[n];
//           };
//         }
        
//         const fib = memoizedFibonacci();
//         console.log(fib(10));  // 55
        
// Functional Programming techniques -----------

// Pure functions 

// function pureAdd(a,b){
//           return a+b;
// }

// High order function - Higher-order functions are functions that either accept functions as arguments or return functions as output.

// function map(array, fn) {
//           const result = [];
//           for (let i = 0; i < array.length; i++) {
//             result.push(fn(array[i]));
//           }
//           return result;
//         }
        
//         const numbers = [1, 2, 3];
//         const doubled = map(numbers, num => num * 2);
//         console.log(doubled);  // [2, 4, 6]
        

// - Function Composition 

// const add = x => x + 2;
// const multiply = x => x * 3;

// const compose = (f, g) => x => f(g(x));

// const addThenMultiply = compose(multiply, add);
// console.log(addThenMultiply(4));  // (4 + 2) * 3 = 18

// ------------ memory leak - Global Variables - variables declared globally (or implicitly) stay in memory for the lifetime of the application.

// function createGlobalLeak() {
//           globalVar = 'I am a global leak';
// }

// console.log(createGlobalLeak());

// Event listeners that are not removed after they are no longer needed can keep references to objects, causing memory to not be freed.

// Closures can cause memory leaks if they maintain references to variables that are no longer needed.

// function createLeak (){
//           let bigArray = new Array(1000).fill('leak');
//           return function(){
//                     console.log(bigArray.length);
//           };
// }

// const leak = createLeak();

// Timers continue to hold references to variables, and if not cleared, they can cause memory to pile up.

/*
   - Always declare variables with let or const to avoid global scope leaks.
  - Remove event listeners when they are no longer needed using   removeEventListener.
 - Clear intervals or timeouts using clearInterval or clearTimeout.
 - Be mindful of closures and avoid keeping unnecessary data in them.
 */

// Lazy Loading - Lazy loading defers the loading of resources (images, scripts, components) until they are actually needed. This improves page load times and reduces initial load size.
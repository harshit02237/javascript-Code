//   function myFunction(){
//           console.log("Hello Harshit");
//   } 

//   myFunction();
//   myFunction(); 

// function myFunction(msg){
//         console.log(msg);
// }

// myFunction("I love u Ram....");  // Argument

// function to calculate sum
// function sum(X,Y){
//         console.log(X+Y);
// }

// sum(2345,4567);

/*
Note* 
- functions parameters are like local variables of function and are alive till block scope of function.
*/

/*
Arrow function - Compact way of writing a function 

const functionName = ( param1,param2...) => {
        //do some work
}
const arrowSum = (a,b) => {
        console.log(a+b);
};
*/

// function countVowels(str){
//         let count = 0;
//         for(const char of str){
//                 if(
//                     char === "a" ||
//                     char === "e" ||
//                     char === "i" ||
//                     char === "o" ||
//                     char === "u"    
//                 ){
//                         count++;
//                 }
//         }
//         return count;
// }

// for each method

/*
- arr.forEach(callBackFunction)

call back function - Here,it is a function to execute for each element in the array

** A callback function is a function passed as an argument to another function
*/

// let arr = [1,2,3,4,5];

// arr.forEach((val) => {
//         console.log(val);
// });

// let nums = [4,5,6,7];

// nums.forEach((num) =>{
//         console.log(num*num);
// });

// // method 2 

// let calcSquare = ((num) =>{
//         console.log(num*num);
// });

// nums.forEach(calcSquare);

// map function = is used when we have to create new array using old values

// let nums = [94, 75, 56];

// let newArr = nums.map((val) => {
//         return val * 2*val;
// });

// console.log(newArr);

// let calcSquare = (num) =>{
//                 console.log(num*num);
//         };

        // filter function - creates a new array of elements that give true for a condition/filter. eg: all even elements.

        // reduce method - performs some operations & reduce the array to a single value. it returns that single value.

        let arr = [1,2,3,4,5,6];

        const output = arr.reduce((res, curr) => {
                return res + curr;
        });

        console.log(output);





  


 
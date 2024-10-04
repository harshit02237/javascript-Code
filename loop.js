// for(count = 1; count <= 5; count++){
//           console.log("Harshit");
// }

// let sum = 0;
// for(let i = 1; i <=5 ; i++){
//           sum = sum+i;
// }
// console.log("Sum is : ", sum)
// console.log("Loop has ended"); 

// for (let i = 1; i >= 0; i++){
//           console.log("i = ", i);
// } 

// // while loop
// let i = 1;
// while(i<=5){
//           console.log("i=",i);
//           i++;
// }
// console.log("Loop ended");

// do while loop

// let i = 1;

// do{
//       console.log("Hello world");
//       i++;    
// } while(i<=10);

// for of loop

// let str = "Harshit";
// for(let i of str){
//           console.log("i=", i);
// }

// for in loop

// let student = {
//           name: "Harshit",
//           age: 20,
//           cgpa: 8.2,
//           isPass: true
// };

// for(let i in student){
//           console.log("Key = ",i, " Value = ", student[i]);
// }

// code for all even numbrs from 0 to 100

// for(let i=0; i<=100; i++){
//           if(i % 2 === 0){
//                     console.log("i=",i);
//           }
// }

// Game 

// let gameNum = 23;
// let userNum = prompt("Guess the Game number : ");

// while (userNum != gameNum) {
//           userNum = prompt("You Guessed the wrong number. Guess Again : ");
// }
// console.log(" Congratulations You Guessed the correct Number");

let items = [250, 645, 300, 900, 50];

let i = 0;
for (let val of items){
          console.log(`value at index ${i} = ${val}`);
}
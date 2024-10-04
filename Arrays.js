let heroes = ["ironman", "hulk", "batman"];
let marks = [96,75,48,83,66];
let info = ["rahul", 86, "Delhi"];

for(let idx=0; idx<heroes.length; idx++){
          console.log(heroes[idx]);
}
to uppercase using for of loop
for(let hero of heroes){
          console.log(hero.toUpperCase());
}
let students = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let val of students){
                    sum += val;
          }
let average = sum/students.length;
console.log(average); 

let items = [250,645,300,900,50];

let i = 0;
for(let val of items) {
          console.log(`value at index ${i} = ${val}`);
          let offer = val/10;
          items[i] = items[i] - offer;
          console.log(`value after offer = ${items[i]}`);
          i++;
}

for(let i = 0; i < items.length; i++){
          offer = items[i]/10;
          items[i] -= offer;
}

console.log(items);

question

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "Ibm", "Netflix"];
console.log(companies);
// remove the first company from the array.
companies.shift();
console.log(companies);
//remove uber and add ola in its place.
companies.splice(1,1,"Ola");
console.log(companies);
//Add amazon to the end.
companies.push("amazon");
console.log(companies);

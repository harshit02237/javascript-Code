// function getData(dataId, getNextData){
//           return new Promise((resolve,reject) => {
//                     setTimeout(()=>{
//                               console.log("data", dataId);
//                               resolve ("sucess");
//                               if(getNextData){
//                                         getNextData();
//                               }
//                     }, 5000);
//           })
// }

// Callback Hell

// // getData(1,() => {
// //           console.log("getting data 2 ... ");
// //           getData(2, () =>{
// //                     console.log("getting data 3 ... ");
// //                     getData(3, () => {
// //                               console.log("getting data 4 ... ");
// //                               getData(4);
// //                     });
// //           });
// // });

// function asyncFunc () {
//           return new Promise((resolve, reject) => {
//              setTimeout(() => {
//                     console.log("Some data 1");
//                     resolve("sucess");
//              },4000);
//           });
// }
// console.log("Fetching data 1");
// let p1 = asyncFunc();
// p1.then((res) => {
//           console.log(res);
// })

// async await

// function getData(dataId){
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          console.log("data", dataId);
//          resolve("sucess");
//       }, 2000);
//    });
// }

// (async function (){
//    await getData(1);
//    await getData(2);
//    await getData(3);
//    await getData(4);
//    await getData(5);

// }) ();

// Fetch Api

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
   console.log("Getting data.....");
   let response = await fetch(URL);
   console.log(response);
   let data = await response.json();
   factPara.innerText = data[0].text;
}

function getFacts(){
   fetch(URl)
   .then((response) => {
      return response.json();
   })
   .then((data) => {
      console.log(data);
      factPara.innerText = data[0].text;
   });
}
btn.addEventListener("click", getFacts);
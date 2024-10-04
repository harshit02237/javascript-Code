// /* 
// - The change in the state of an object is known as an Event.
// - Events are fired to notify code of "interesting changes" that may affect code execution.

// Example - mouse events, Keyboard events, form events, print event & many more.

// - Event object - it is a special object that has details about the event.
// - All event handlers have access to the event objects properties and methods.

// node.event = (e) => {
//           // Handle Here
// }

// - Event Listners - node.addEventListners(event, callback), node.removeEventListner(event, callback)
// */ 

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//           console.log(evt);
//           console.log(evt.type);
//           console.log(evt.target);
//           // console.log("btn 1 was clicked");
// }

let modeBtn = document.querySelector("#mode");
let currmode = "light";
modeBtn.addEventListener("click", () => {
          if(currmode === "light"){
                    currmode = "dark";
                    document.querySelector("body").style.backgroundColor = "black";
          }else{
                    currmode = "light";
                    document.querySelector("body").style.backgroundColor = "white";
          }
          console.log(currmode);
})
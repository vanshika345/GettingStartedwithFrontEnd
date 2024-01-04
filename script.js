/* Iteration 4: Make the Canvas App Functional */
/* Iteration 4: Make the canvas app Work */ 

const buttonBackground = document.getElementById("buttonbackground");
const imgBackground = document.getElementById("background");

buttonBackground.oninput = ()=>{
  imgBackground.style.fill = buttonBackground.value;
}

const buttonfaceplate = document.getElementById("buttonfaceplate");
const faceplate = document.getElementById("faceplate");

buttonfaceplate.oninput = ()=>{
  faceplate.style.fill = buttonfaceplate.value;
} 
const buttoneyes = document.getElementById("buttoneyes");
const eyes = document.getElementById("eyes");

buttoneyes.oninput = ()=>{
  eyes.style.fill = buttoneyes.value;
}

const buttonhelmet = document.getElementById("buttonhelmet");
const helmet = document.getElementById("helmet");

buttonhelmet.oninput = ()=>{
  helmet.style.fill = buttonhelmet.value;
}
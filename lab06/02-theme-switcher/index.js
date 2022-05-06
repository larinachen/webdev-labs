/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
const setClassDefault = () =>{
   console.log("default")
   document.querySelector("body").className = "default";
}

const setClassDesert = () =>{
   console.log("desert")
   document.querySelector("body").className = "desert";
}

const setClassOcean = () =>{
   console.log("ocean")
   document.querySelector("body").className = "ocean";
}

const setClassHC = () =>{
   console.log("high-contrast")
   document.querySelector("body").className = "high-contrast";
}

document.querySelector("#default").addEventListener('click', setClassDefault);
document.querySelector("#desert").addEventListener('click', setClassDesert);
document.querySelector("#ocean").addEventListener('click', setClassOcean);
document.querySelector("#high-contrast").addEventListener('click', setClassHC);


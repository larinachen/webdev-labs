curr_size = 20
const makeBigger = () => {
   document.querySelector("div .content p").style.fontSize = (curr_size + 5) + "px"
   document.querySelector("h1").style.fontSize = (curr_size + 15) + "px"
   curr_size += 5
   console.log(curr_size)
};

const makeSmaller = () => {
   if (curr_size > 5){
      document.querySelector("div .content p").style.fontSize = (curr_size - 5) + "px"
      document.querySelector("h1").style.fontSize = (curr_size + 15) + "px"
      curr_size -= 5
   }
   console.log(curr_size)
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);


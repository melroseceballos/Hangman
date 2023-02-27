// DECLARING VARIABLES
const words = ['elephant','rats','octopus']
let wrongCount = 6;

// TO RANDOMIZE WORDS
const randomize = Math.floor(Math.random() * words.length)
const guessWord = words[randomize]

// TO ADD TO HTML
function getWord() {
  var get = document.getElementById("wordHere");
  if (get.innerHTML === "Word Goes Here"){
    get.innerHTML = guessWord;
  }
}
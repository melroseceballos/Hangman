//play button call
function hide (){
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('play').style.display = 'none';
    document.getElementById('word-guess').style.display = "block";
    document.getElementById('letters').style.display = "block";
//figure out how to show the gallows when play is clicked
}

//GUESS WORD GENERATOR
const guessWord = document.getElementById('word-guess');
const letterBtns = document.querySelectorAll('#letters button');
const words = ["cat", "dog", "rat", "tiger", "wolf", "deer", "panda","elephant", "buffalo", "tortoise", "penguin", "alligator", "badger","snake", "armadillo", "axolotl", "octopus", "whale", "moles", "goose", "cheetah", "chipmunk", "gecko", "sea lion", "gorilla" , "magpie", "antelope", "rabbits" ];
 let wordIndex = Math.floor(Math.random() * words.length);
 magicWord = words[wordIndex];
console.log(magicWord)

//GAMEPLAY
let WrongCount = 6;
document.getElementById('letters')
  .addEventListener('click', handleLetterClick);
  function handleLetterClick(evt) {
    let letter = evt.target.textContent;
    if (
      evt.target.tagName !== 'BUTTON' ||
      usedLetters.includes(letter) ||
      secretWord === guessWord ||
      wrongLetters.length === LOSE_WRONG_COUNT
    ) return;
    usedLetters.push(letter);
    if (secretWord.includes(letter)) {
      // correct guess
      let newGuessWord = '';
      for (let i = 0; i < secretWord.length; i++) {
        newGuessWord += (secretWord.charAt(i) === letter) ? letter : guessWord.charAt(i);
      }
      guessWord = newGuessWord;
    } else {
      wrongLetters.push(letter);
    }
    render();
}
//figure out how to generate word and use "guess-word" as placement holder
//figure out to disable buttons when used
//play button call
function hide (){
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('play').style.display = 'none';
    document.getElementById('word-guess').style.display = "block";
    document.getElementById('letters').style.display = "block";
    document.getElementById('mystery-word').style.display = "block";
}

//GUESS WORD GENERATOR
const words = ["cat", "dog", "rat", "tiger", "wolf", "deer", "panda","elephant", "buffalo", "tortoise", "penguin", "alligator", "badger","snake", "armadillo", "axolotl", "octopus", "whale", "moles", "goose", "cheetah", "chipmunk", "gecko", "sea lion", "gorilla" , "magpie", "antelope", "rabbits" ];
 let wordIndex = Math.floor(Math.random() * words.length);
 magicWord = words[wordIndex];
console.log(magicWord)
// use prompt sync for user input for the letter

//ask user for  a new game?
// use new button to generate a new word using math.random

//make a div for second frame
//event listener when play is clicked second frame div is shown


/**** When a user gets a wrong answer*********
 * show lines when user gets it wrong
 * 
 * toggle class names for lines to display dependent on answer
 * 
 * 
 */

/* When user gets right answer ****************
* when a user gets a letter right put right letter on lines
*
*
*
*
**/

//have a  button for user to terminate before game or during game
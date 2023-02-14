# Hangman
<p align="center"><img src="hangman_banner.png"></p>

You're going to be putting your knowledge of JavaScript and the DOM to the test by building a hangman game in the browser!! It will be your biggest homework yet, but you have three days ***and*** class time to work on it. You'll do great!

Additionally, there is a `solutions` branch provided for you in case you need to look at it for reference. **REMEMBER THERE ARE MANY WAYS TO ACHEIVE THE SAME END, THERE IS NO ONE RIGHT ANSWER.** All that matters is that your app meets the specifications below, and you'll be good. The code in the `solutions` branch may be more complicated, or it could be more simplistic than your code. As long as your hangman game functions, you're set!


## Set Up
- Fork and clone this repository
- Create a folder `mkdir` called `browser-game`
- `cd` into `browser-game` and create an HTML, CSS, and JS file
- Link your files together


## Planning
- Wireframe the game out! What do you want your hangman to look like? It's okay to make it rudimentary, as long as its functional we're good! There is a limited amount of time to spend on this, so making it look pretty should be the last thing you focus on.
- Think about the game logic. What actions are involved? Do some actions trigger others?
- Start simple with basic functionality, then gradually combine different pieces of the game until it all fits together.


## Rules of the Game
Most of us are familiar with the game of Hangman. Your browser game will behave as any normal hangman game. If you are unfamiliar with hangman, here's how it works:

- Typically a gallows is depicted on the screen (or board or paper - whatever is being used to play).
- A word or phrase is chosen and a dashed line is drawn indicating the number of letters the word/phrase has.
- The player then guesses letters to figure out what the word/phrase is. 
- The player has a limited number of guesses. Each time they guess a letter correctly, that letter will appear in all the places on the dashed line where it belongs (see the above image). If a player guesses a letter wrong, then a person's body part is drawn on the gallows (see above image again for reference).
- If the whole person is drawn out before the word/phrase is guessed, then the game ends and the player loses.
- If all the word/phrase is completed before the hangman is drawn out, then the game ends and the player wins.


## Specifications
- Create a wireframe that lays out what your Hangman game will look like, including any necessary comments about behavior/functionality of the site
- Your game abides by the rules of hangman (listed above)
- Every time you refresh the page, a word/phrase to be guessed is randomly chosen (HINT: Maybe you can use `Math.random()` and arrays)
- After the player guesses a letter by clicking on it, that letter is not able to be clicked on again. (HINT: maybe you can remove the `<button>` after it has been guessed, or `disable` it)
- Display a "You win!" or a "You lose" message depending on the game outcome.


## Bonus
- Create a button that allows the player to play again, and they will not be given a word they already guessed until they have cycled through all the possible words in the words array.
- Go crazy with the CSS! Make it is as fun as you can!


## Mega Bonus
- Introduce topics - where a different selection of words will randomly be drawn from depending on the selected topic. 
- Create a "Random Topic" option that will randomly select a topic
- Create an "All Topics" option that will randomly draw a word from any of the topics

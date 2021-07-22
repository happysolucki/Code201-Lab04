//list items in array
const listEntries = function listAllEntries(list) {
  // create empty string
  let listing = '';
  // for each loop
  list.forEach((entry, index, array) => {
    if (Object.is(array.length - 1, index)) {
      // if on the last entry in array, append entry onto listing in special way
      listing += `and ${entry}`;
    } else {
      // concatenate entries onto each other & store into listing
      listing += `${entry}, `;
    }
  });
  return listing;
}
// questions that want a yes confirmation
const confirmYes = function preferYesConfirmation(question) {
  let guess = prompt(question).toUpperCase();
  if (guess === 'Y' || guess === 'YES') {
    alert("Correct!");
    return 1;
  } else {
    alert("Incorrect!");
    return 0;
  }
}

// questions that want a yes confirmation
const confirmNo = function preferNoConfirmation(question) {
  let guess = prompt(question).toUpperCase();
  if (guess === 'N' || guess === 'NO') {
    alert("Correct!");
    return 1;
  } else {
    alert("Incorrect!");
    return 0;
  }
}

// questions that prompt user to guess random number
const confirmNum = function confirmRandomNumber(question) {
  let guess = parseInt(prompt(question));
  let randNum = Math.floor(Math.random() * 20 + 1);
  console.log(randNum);
  let attempts = 4;
  while(attempts !== 0) {
    if (guess === randNum) {
      alert("Correct!");
      // correctGuesses++;
      return 1;
      // attempts = 0;
    } else {
      attempts--;
      if (attempts === 0) {
        alert(`Sorry! You're out of attempts. The correct answer is ${randNum}.`);
      } else if (guess > randNum) {
        guess = parseInt(prompt(`Incorrect guess. Too high. Try again.\n${question}\nAttempts left: ${attempts}`));
      } else {
        guess = parseInt(prompt(`Incorrect guess. Too low. Try again.\n${question}\nAttempts left: ${attempts}`));
      }
    }
  }
  return 0;
}

// question that asks for one of my friend's name
const confirmFriend = function confirmFriendName(question) {
  let guess = prompt(question);
  const friends = ['Javion', 'Cameron', 'Brandon', 'Samira', 'Naomi', 'Peyton'];
  let attempts = 6;
  while (attempts !== 0) {
    // check if guess matches an entry in friends array. if it does, filter those into result
    let result = friends.filter(name => name.toUpperCase().includes(guess.toUpperCase()));
    // if result contains a value & guess isn't an empty string, there's a match
    if (result.length > 0 && guess !== '') {
          alert(`Correct!\nYou could've entered any name in this list:\n${listEntries(friends)}`);
          return 1;
        } else {
          attempts--;
          if (attempts === 0) {
            alert(`Sorry! You're out of attempts.\nAny name from this list would have been correct:\n${listEntries(friends)}`);
          } else {
            guess = prompt(`Incorrect guess. Try again.\n${question}\nAttempts left: ${attempts}`);
          }
        }
      }
  return 0;
}

// quiz function
const quiz = function aboutMeQuiz() {
  let name = prompt("Welcome to the quiz about me! First, what is your name?");

  // while loop to guarantee name isn't null, undefined, or an empty string
  while(name == null || name === '') {
    name = prompt("Invalid input. Please enter your name correctly.");
  }

  alert("Please answer the following questions with a simple 'yes' or 'no'. Entering 'y' or 'n' suffices as well.");

  // counter for how many questions the user answered correctly
  let correctGuesses = 0;

  // stored questions inside of an array to keep code DRY
  const questions = [ 'Was I born in Memphis?', 'Am I 22 years old?', 'Did I graduate from Central High School?', 'Is my favorite video game SSX3?', 'Is my favorite sport soccer?', 'Guess a number between 1 & 20.', 'Please name one of my friends.' ];

  // store functions that correspond to questions in an array
  const confirmations = [ confirmYes, confirmYes, confirmNo, confirmYes, confirmNo, confirmNum, confirmFriend ];
  // simple for loop
  for (let i = 0; i < questions.length; i++) {
    // sum return values of every function in confirmations into correctGuesses
    correctGuesses += confirmations[i](questions[i]);
  }

  // Thank user for participation & tell user how many questions they answered correctly
  alert(`Thank you for taking this quiz ${name[0].toUpperCase() + name.substring(1).toLowerCase()}! You guessed ${correctGuesses} out of 7 questions correctly.`);

}

// call quiz function when button is clicked
let button = document.querySelector('button');
button.addEventListener('click', quiz);

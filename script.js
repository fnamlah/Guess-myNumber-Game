'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!'; // calling a class from HTML and Changing its value.
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Math.trunc rounds up the decimals, Math.random gives a random number * 20 gives 1-19 and + 1 adds it to 1-20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // initial score
let highscore = 0;
const displsyMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Event Listener is basically: mouse click or moving or key press or any other event.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //using !guess turns result to boolean and once the input is false the message will change
  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No Number!';
    displsyMessage('⛔️ No Number!');
    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displsyMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High!' : '📈 Too Low!';
      displsyMessage(guess > secretNumber ? '📈 Too High!' : '📈 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game!';
      displsyMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
    // When guess is too high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📈 Too High!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    //   // When guess is too low
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📈 Too Low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
});
// Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displsyMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

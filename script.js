// 'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct sucka💯';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 14;
// document.querySelector('.score').textContent = 3;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const scoreCount = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    displayMessage('❌no number🚫');
  } //when player wins
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').classList.add('pulsate');
    displayMessage(`You Win ${secretNumber} 💋kisses💋`);
    document.getElementById('myMessage').classList.add('pulsate');

    document.querySelector('body').classList.add('pulsateBackground');
    document.querySelector('.number').style.width = '200px';
    //check the high score

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'Thats too many kisses💋, Miss Jay are you crazy😱🤪?,calm down!🚫🚫🤪!'
          : '😢Not enough kisses💔💔💔, I need more kisses💋🥰💋!'
      );
      score--;
      // document.querySelector('.score').textContent = score;
      scoreCount(score);
    } else {
      document.querySelector('.message').textContent = 'You lose';
      // document.querySelector('.score').textContent = 0;
      scoreCount('0');
    }
  }

  //when guess is to high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     displayMessage(
  //       'Thats too many kisses💋, Miss Jay are you crazy😱🤪?,calm down!🚫🚫🤪!'
  //     );
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //when guess is to low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     displayMessage('😢Number is to low💔, I need more kisses💋🥰💋!');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  const guess = Number((document.querySelector('.guess').value = ''));
  // document.querySelector('.score').textContent = score;
  scoreCount(score);
  document.querySelector('.number').classList.remove('pulsate');
  document.querySelector('.number').textContent = '?💋';
  document.querySelector('.number').style.width = '100px';
  document.getElementById('myMessage').classList.remove('pulsate');
  displayMessage('Start guessing...');

  document.querySelector('body').classList.remove('pulsateBackground');
  document.querySelector('body').style.backgroundColor = '#c86d6d';
});

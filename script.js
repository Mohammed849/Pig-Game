'use strict';

// sellecting elements
const playerZeroEl = document.querySelector('.player--0')
const playerOneEl = document.querySelector('.player--1')
const scoreZeroEl = document.querySelector('#score--0');
const scoreOneEl = document.querySelector('#score--1');
const currentZeroEl = document.getElementById('current--0');
const currentOneEl = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// starting conditions
scoreZeroEl.textContent = 0;
scoreOneEl.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //turnary operator
  playerOneEl.classList.toggle('player--active');
  playerZeroEl.classList.toggle('player--active');
}

// rolling dice functionality
btnRoll.addEventListener('click', function(){
  if (playing){
     // 1-genereate a rondom dice roll
  const dice = Math.trunc(Math.random() * 6) + 1
  // console.log(dice);
  // 2-display dice

  diceEl.classList.remove('hidden');
  diceEl.src = ` dice-${dice}.png`;
  // 3-check for rolled1, if true ? 
  if (dice !== 1){
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    // currentZeroEl.textContent = currentScore; 
    // add dice to current score
  }else{
    // display for the next player
    switchPlayer();
  }
  }
})
btnHold.addEventListener('click', function(){
  if (playing){
    // 1- add the score to the current player's score
  scores[activePlayer] += currentScore; //ex : scores[1] = scores[1] = cureentSore
  document.getElementById(`score--${activePlayer}`).textContent =
  scores[activePlayer];
  
  // check is current player's score == 100,
  // finish the game
  if (scores[activePlayer] >= 100){
    playing = false;
    diceEl.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner')
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active')
  }else{
    // else siwitch to the next palyer
    switchPlayer();
  }

  }
  
  
})
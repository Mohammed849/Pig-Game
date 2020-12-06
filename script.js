'use strict';

// sellecting elements
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

let currentScore = 0;

// rolling dice functionality
btnRoll.addEventListener('click', function(){
  // 1-genereate a rondom dice roll
  const dice = Math.trunc(Math.random() * 6) + 1
  // console.log(dice);
  // 2-display dice

  diceEl.classList.remove('hidden');
  diceEl.src = ` dice-${dice}.png`;
  // 3-check for rolled1, if true ? 
  if (dice !== 1){
    currentScore += dice;
    currentZeroEl.textContent = currentScore; 
    // add dice to current score
  }else{
    // display for the next player
  }
})
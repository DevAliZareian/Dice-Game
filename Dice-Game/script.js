"use strict";
//Buttons.
const newGame = document.querySelector(".new-game");
const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
//Player 1.
const dice_1 = document.querySelector(".dice-1");
const score_1 = document.querySelector(".score-1");
const animation_p1 = document.querySelector(".player-1");
const animation_p1_scoreBox = document.querySelector(".score-box-1");
//Player 2.
const dice_2 = document.querySelector(".dice-2");
const score_2 = document.querySelector(".score-2");
const animation_p2 = document.querySelector(".player-2");
const animation_p2_scoreBox = document.querySelector(".score-box-2");
//Dice.
const dice = document.querySelector(".dice");
//Script.
newGame.addEventListener("click", () => {
  location.reload();
}); //New Game.
//Roll Dice.
let player = true;
let scoreP1 = 0;
let fScoreP1 = 0;
let scoreP2 = 0;
let fScoreP2 = 0;

roll.addEventListener("click", () => {
  if (player) {
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    dice.innerHTML = diceNumber;
    if (diceNumber !== 1) {
      scoreP1 += diceNumber;
      dice_1.innerHTML = scoreP1;
    } else {
      //switch animation.
      animation_p1.classList.remove("animated-2");
      animation_p2.classList.remove("animated-1");
      animation_p1.classList.add("animated-1");
      animation_p2.classList.add("animated-2");
      animation_p1_scoreBox.classList.remove("animated-1");
      animation_p2_scoreBox.classList.remove("animated-2");
      animation_p1_scoreBox.classList.add("animated-2");
      animation_p2_scoreBox.classList.add("animated-1");
      //----------------------------------------------------------------
      dice_1.innerHTML = 0;
      scoreP1 = 0;
      player = false;
      return player;
    }
  }
  if (!player) {
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    dice.innerHTML = diceNumber;
    if (diceNumber !== 1) {
      scoreP2 += diceNumber;
      dice_2.innerHTML = scoreP2;
    } else {
      //switch animation.
      animation_p1.classList.remove("animated-1");
      animation_p2.classList.remove("animated-2");
      animation_p1.classList.add("animated-2");
      animation_p2.classList.add("animated-1");
      animation_p1_scoreBox.classList.remove("animated-2");
      animation_p2_scoreBox.classList.remove("animated-1");
      animation_p1_scoreBox.classList.add("animated-1");
      animation_p2_scoreBox.classList.add("animated-2");
      //----------------------------------------------------------------
      dice_2.innerHTML = 0;
      scoreP2 = 0;
      player = true;
      return player;
    }
  }
});
//Hold.
hold.addEventListener("click", () => {
  if (player) {
    //switch animation.
    animation_p1.classList.remove("animated-2");
    animation_p2.classList.remove("animated-1");
    animation_p1.classList.add("animated-1");
    animation_p2.classList.add("animated-2");
    animation_p1_scoreBox.classList.remove("animated-1");
    animation_p2_scoreBox.classList.remove("animated-2");
    animation_p1_scoreBox.classList.add("animated-2");
    animation_p2_scoreBox.classList.add("animated-1");
    //----------------------------------------------------------------
    fScoreP1 += scoreP1;
    score_1.innerHTML = fScoreP1;
    dice_1.innerHTML = 0;
    scoreP1 = 0;
    player = false;
    if (score_1.innerHTML >= 100) {
      dice_1.innerHTML = "برنده";
      setTimeout(() => {
        location.reload();
      }, 1500);
    }
    return player;
  }
  if (!player) {
    //switch animation.
    animation_p1.classList.remove("animated-1");
    animation_p2.classList.remove("animated-2");
    animation_p1.classList.add("animated-2");
    animation_p2.classList.add("animated-1");
    animation_p1_scoreBox.classList.remove("animated-2");
    animation_p2_scoreBox.classList.remove("animated-1");
    animation_p1_scoreBox.classList.add("animated-1");
    animation_p2_scoreBox.classList.add("animated-2");
    //----------------------------------------------------------------
    fScoreP2 += scoreP2;
    score_2.innerHTML = fScoreP2;
    dice_2.innerHTML = 0;
    scoreP2 = 0;
    player = true;
    if (score_2.innerHTML >= 100) {
      dice_2.innerHTML = "برنده";
      setTimeout(() => {
        location.reload();
      }, 1500);
    }
    return player;
  }
});

// Logic to reset board for new game
var resetBoard = function (){
	location.reload();
};

// Set variables for each box (COULD BE SMALLER)

var theBox1 = document.getElementById('box1');
var theBox2 = document.getElementById('box2');
var theBox3 = document.getElementById('box3');
var theBox4 = document.getElementById('box4');
var theBox5 = document.getElementById('box5');
var theBox6 = document.getElementById('box6');
var theBox7 = document.getElementById('box7');
var theBox8 = document.getElementById('box8');
var theBox9 = document.getElementById('box9');

// And the scoreboard

var scoreBoard = document.getElementById('score-board');

// ****************************
// ******* GAME LOGIC *********
// ****************************

// Set a turn marker

var turn = true;

// Create a function that will alternate
// between setting X and setting Y

function takeTurns() {
  if (turn) {
    if (this.innerText != "X" && this.innerText != "O"){
      this.innerText = "X";
      declareWinner();
      return (turn = false);
    }
  }
  else {
    if (this.innerText != "X" && this.innerText != "O"){
      this.innerText = "O";
      declareWinner();
      return (turn = true);
    }
  }
}

// Create listener to run takeTurns events for each box
// (COULD BE SMALLER)

theBox1.addEventListener('click', takeTurns);
theBox2.addEventListener('click', takeTurns);
theBox3.addEventListener('click', takeTurns);
theBox4.addEventListener('click', takeTurns);
theBox5.addEventListener('click', takeTurns);
theBox6.addEventListener('click', takeTurns);
theBox7.addEventListener('click', takeTurns);
theBox8.addEventListener('click', takeTurns);
theBox9.addEventListener('click', takeTurns);

// Logic to declare a winner

function declareWinner() {
  if ((box1.innerHTML == "X" && box2.innerHTML == "X" && box3.innerHTML == "X") || (box4.innerHTML == "X" && box5.innerHTML == "X" && box6.innerHTML == "X") || (box7.innerHTML == "X" && box8.innerHTML == "X" && box9.innerHTML == "X") || (box1.innerHTML == "X" && box4.innerHTML == "X" && box7.innerHTML == "X") || (box2.innerHTML == "X" && box5.innerHTML == "X" && box8.innerHTML == "X") || (box3.innerHTML == "X" && box6.innerHTML == "X" && box9.innerHTML == "X") || (box1.innerHTML == "X" && box5.innerHTML == "X" && box9.innerHTML == "X") || (box3.innerHTML == "X" && box5.innerHTML == "X" && box7.innerHTML == "X")) {
    setTimeout(function(){ scoreBoard.innerText = "X IS THE WINNER"; }, 100);
  }
  else if ((box1.innerHTML == "O" && box2.innerHTML == "O" && box3.innerHTML == "O") || (box4.innerHTML == "O" && box5.innerHTML == "O" && box6.innerHTML == "O") || (box7.innerHTML == "O" && box8.innerHTML == "O" && box9.innerHTML == "O") || (box1.innerHTML == "O" && box4.innerHTML == "O" && box7.innerHTML == "O") || (box2.innerHTML == "O" && box5.innerHTML == "O" && box8.innerHTML == "O") || (box3.innerHTML == "O" && box6.innerHTML == "O" && box9.innerHTML == "O") || (box1.innerHTML == "O" && box5.innerHTML == "O" && box9.innerHTML == "O") || (box3.innerHTML == "O" && box5.innerHTML == "O" && box7.innerHTML == "O")){
    setTimeout(function(){ scoreBoard.innerText = "O IS THE WINNER"; }, 100);
  }
}

// *****************
// **OBSOLETE CODE**
// *****************

// // Create two functions that change box color
//
// function makeBoxPink() {
//   this.style.backgroundColor = "#ff1493";
// }
//
// function makeBoxGreen() {
//   this.style.backgroundColor = "#4cbb17";
// }
//
// // Create two functions that change box to X / O
//
// function makeBoxX(){
//   this.innerText = "X";
// }
//
// function makeBoxO(){
//   this.innerText = "O";
// }

// // Create a listen event to run makeBoxPink on click
//   theBox1.addEventListener('click', makeBoxPink);
//   theBox2.addEventListener('click', makeBoxPink);
//   theBox3.addEventListener('click', makeBoxPink);
//   theBox4.addEventListener('click', makeBoxPink);
//   theBox5.addEventListener('click', makeBoxPink);
//   theBox6.addEventListener('click', makeBoxPink);
//   theBox7.addEventListener('click', makeBoxPink);
//   theBox8.addEventListener('click', makeBoxPink);
//   theBox9.addEventListener('click', makeBoxPink);
//
// // Create a listen event to run makeBoxPink on click
//   theBox1.addEventListener('click', makeBoxGreen);
//   theBox2.addEventListener('click', makeBoxGreen);
//   theBox3.addEventListener('click', makeBoxGreen);
//   theBox4.addEventListener('click', makeBoxGreen);
//   theBox5.addEventListener('click', makeBoxGreen);
//   theBox6.addEventListener('click', makeBoxGreen);
//   theBox7.addEventListener('click', makeBoxGreen);
//   theBox8.addEventListener('click', makeBoxGreen);
//   theBox9.addEventListener('click', makeBoxGreen);
//
// // Create a listen event to run makeBoxX on click
//   theBox1.addEventListener('click', makeBoxX);
//   theBox2.addEventListener('click', makeBoxX);
//   theBox3.addEventListener('click', makeBoxX);
//   theBox4.addEventListener('click', makeBoxX);
//   theBox5.addEventListener('click', makeBoxX);
//   theBox6.addEventListener('click', makeBoxX);
//   theBox7.addEventListener('click', makeBoxX);
//   theBox8.addEventListener('click', makeBoxX);
//   theBox9.addEventListener('click', makeBoxX);
//
// // Create a listen event to run makeBoxO on click
//   theBox1.addEventListener('click', makeBoxO);
//   theBox2.addEventListener('click', makeBoxO);
//   theBox3.addEventListener('click', makeBoxO);
//   theBox4.addEventListener('click', makeBoxO);
//   theBox5.addEventListener('click', makeBoxO);
//   theBox6.addEventListener('click', makeBoxO);
//   theBox7.addEventListener('click', makeBoxO);
//   theBox8.addEventListener('click', makeBoxO);
//   theBox9.addEventListener('click', makeBoxO);

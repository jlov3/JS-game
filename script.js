let userGuess = document.getElementById("userGuess");
let compGuess = document.getElementById("compGuess");
let result = document.getElementById("result");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let list = ['rock', 'paper', 'scissors'];
let rply = document.getElementById("replay");

function shoot(hand) {
  var comp = Math.floor(Math.random() * 2);
  if(comp == 0) {
    comp = "rock";
  } else if(comp==1) {
    comp = "paper";
  } else {
    comp = "scissors";
  }

  userGuess.innerText = hand;
  compGuess.innerText = comp;

  let uShot = document.getElementById(hand);
  let cShot = document.getElementById(comp);
  if(hand!=comp) {
    uShot.classList.add("uShot");
    cShot.classList.add("cShot");
  }

  if(hand == comp) {
    result.innerText = "User ties with Computer. Nobody wins.";
    uShot.classList.add("tie");
    cShot.classList.add("tie");
  } else if(hand == 'rock') {
    if(comp == 'scissors') {
      result.innerText = "User beats Computer with rock.";
    } else {
      result.innerText = "Computer beats User with paper."
    }
  } else if(hand == 'paper') {
    if(comp == 'rock') {
      result.innerText = "User beats Computer with paper.";
    } else {
      result.innerText = "Computer beats User with scissors."
    }
  } else {
    if(comp == 'paper') {
      result.innerText = "User beats Computer with scissors.";
    } else {
      result.innerText = "Computer beats User with rock."
    }
  }

  rply.style.display = "block";

  for (i=0; i<list.length; i++) {
    let lItem = document.getElementById(list[i]);
    lItem.removeAttribute("onclick");
    lItem.style.cursor = "not-allowed";
    lItem.classList.add("done");
    if(hand!=list[i] && comp!=list[i]) {
      lItem.classList.add("played");
    }
  }
}

function replay() {
  rply.style.display = "none";
  /* works in console but not here?
  userGuess.innerText = ""; */

  for (i=0; i<list.length; i++) {
    let lItem = document.getElementById(list[i]);
    lItem.onclick = shoot;
    /* nobody else would give this straight answer for some reason...?
    https://stackoverflow.com/a/23412811 */
    lItem.setAttribute("onclick", "shoot('" + list[i] + "')");
    lItem.style.cursor = "pointer";
    lItem.classList.remove("done");
    if(list[i]!=userGuess.innerText && list[i]!=compGuess.innerText) {
      lItem.classList.remove("played");
    } else if (userGuess.innerText ===  compGuess.innerText) {
      lItem.classList.remove("tie");
    } else if (list[i] === userGuess.innerText) {
      lItem.classList.remove("uShot");
    } else {
      lItem.classList.remove("cShot");
    }
  }
}

function credits() {
  let creds = document.getElementById("creds");
  if (creds.style.display == "block") {
    creds.style.display = "none";
  } else {
    creds.style.display = "block";
  }
}
function shoot(hand) {
  var comp = Math.floor(Math.random() * 2);
  if(comp == 0) {
    comp = "rock";
  } else if(comp==1) {
    comp = "paper";
  } else {
    comp = "scissors";
  }

  let result = document.getElementById('result');
  let user = document.getElementById('userGuess');
  user.innerText = hand;
  let com = document.getElementById('compGuess');
  com.innerText = comp;

  let uGuess = document.getElementById(hand);
  let cGuess = document.getElementById(comp);
  uGuess.style.backgroundColor = "lightgreen";
  cGuess.style.backgroundColor = "yellow";

  if(hand == comp) {
    result.innerText = "User ties with Computer. No win.";
    uGuess.style.backgroundColor = "red";
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
}
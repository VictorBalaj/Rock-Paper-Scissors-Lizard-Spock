function rockM() {
  switch (roboMove) {
    case "rock":
      document.getElementById("fText").innerHTML= "You both chose rock";
      tiee();
      break;
    case "paper":
      document.getElementById("fText").innerHTML= "Paper covers rock";
      loss();
      break;
    case "scissors":
      document.getElementById("fText").innerHTML= "Rock smashes scissors";
      winn();
      break;
    case "lizard":
      document.getElementById("fText").innerHTML= "Rock crushes lizard";
      winn();
      break;
    case "spock":
      document.getElementById("fText").innerHTML= "Spock vaporizes rock";
      loss();
      break;
  }
  document.querySelector('#wins').innerHTML=`Wins: ${results.W}`;
  document.querySelector('#loss').innerHTML=`Losses: ${results.L}`;
  document.querySelector('#ties').innerHTML=`Ties: ${results.T}`;
}

function paperM() {
  switch (roboMove) {
    case "rock":
      document.getElementById("fText").innerHTML= "Paper covers rock";
      winn();
      break;
    case "paper":
      document.getElementById("fText").innerHTML= "You both chose paper";
      tiee();
      break;
    case "scissors":
      document.getElementById("fText").innerHTML= "Scissors cuts paper";
      loss();
      break;
    case "lizard":
      document.getElementById("fText").innerHTML= "Lizard eats paper";
      loss();
      break;
    case "spock":
      document.getElementById("fText").innerHTML= "Paper disproves Spock";
      winn();
      break;
  }
  document.querySelector('#wins').innerHTML=`Wins: ${results.W}`;
  document.querySelector('#loss').innerHTML=`Losses: ${results.L}`;
  document.querySelector('#ties').innerHTML=`Ties: ${results.T}`;
}

function scissorsM() {
  switch (roboMove) {
    case "rock":
      document.getElementById("fText").innerHTML= "Rock smashes scissors";
      loss();
      break;
    case "paper":
      document.getElementById("fText").innerHTML= "Scissors cuts paper";
      winn();
      break;
    case "scissors":
      document.getElementById("fText").innerHTML= "You both chose scissors";
      tiee();
      results.T++;
      break;
    case "lizard":
      document.getElementById("fText").innerHTML= "Scissors decapitates lizard";
      winn();
      break;
    case "spock":
      document.getElementById("fText").innerHTML= "Spock smashes scissors";
      loss();
      break;
  }
  document.querySelector('#wins').innerHTML=`Wins: ${results.W}`;
  document.querySelector('#loss').innerHTML=`Losses: ${results.L}`;
  document.querySelector('#ties').innerHTML=`Ties: ${results.T}`;
}

function lizardM() {
  switch (roboMove) {
    case "rock":
      document.getElementById("fText").innerHTML= "Rock crushes lizard";
      loss();
      break;
    case "paper":
      document.getElementById("fText").innerHTML= "Lizard eats paper";
      winn();
      break;
    case "scissors":
      document.getElementById("fText").innerHTML= "Scissors decapitates lizard";
      loss();
      break;
    case "lizard":
      document.getElementById("fText").innerHTML= "You both chose lizard";
      tiee();
      break;
    case "spock":
      document.getElementById("fText").innerHTML= "Lizard poisons Spock";
      winn();
      break;
  }
  document.querySelector('#wins').innerHTML=`Wins: ${results.W}`;
  document.querySelector('#loss').innerHTML=`Losses: ${results.L}`;
  document.querySelector('#ties').innerHTML=`Ties: ${results.T}`;
}

function spockM() {
  switch (roboMove) {
    case "rock":
      document.getElementById("fText").innerHTML= "Spock vaporizes rock";
      winn();
      break;
    case "paper":
      document.getElementById("fText").innerHTML= "Paper disproves Spock";
      loss();
      break;
    case "scissors":
      document.getElementById("fText").innerHTML= "Spock smashes scissors";
      winn();
      break;
    case "lizard":
      document.getElementById("fText").innerHTML= "Lizard poisons Spock";
      loss();
      break;
    case "spock":
      document.getElementById("fText").innerHTML= "You both chose Spock";
      tiee();
      break;
  }
  document.querySelector('#wins').innerHTML=`Wins: ${results.W}`;
  document.querySelector('#loss').innerHTML=`Losses: ${results.L}`;
  document.querySelector('#ties').innerHTML=`Ties: ${results.T}`;
};
function restart(){
results.W=0;
results.L=0;
results.T=0;
document.querySelector('#wins').innerHTML=`Wins: ${results.W}`;
document.querySelector('#loss').innerHTML=`Losses: ${results.L}`;
document.querySelector('#ties').innerHTML=`Ties: ${results.T}`;
document.getElementById("fText").innerHTML= "Chose your";
document.getElementById("sText").innerHTML= "M O V E";
document.getElementById("computerLogo").src= "fancy pictures/neutral.png";
document.querySelector('#Cmove').innerHTML=`&nbsp;&nbsp;&nbsp;&nbsp;`;
alert("The game will restart!");
}

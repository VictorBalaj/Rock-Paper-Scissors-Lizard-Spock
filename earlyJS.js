let roboMove ="nothing yet";
let i=0;
const results={
  W:0,
  L:0,
  T:0
};

function compM() {
  i = Math.random();

  switch (true) {
    case i < 0.2:
      roboMove = "rock";
      break;
    case i < 0.4:
      roboMove = "paper";
      break;
    case i < 0.6:
      roboMove = "scissors";
      break;
    case i < 0.8:
      roboMove = "lizard";
      break;
    default:
      roboMove = "spock";
  }
  document.querySelector('#Cmove').innerHTML=`I chose ${roboMove}.`;
  };

  function tiee() {
    document.getElementById("sText").innerHTML= "T I E";
    document.getElementById("computerLogo").src= "fancy pictures/tie.png";
    results.T++;
  };
  function loss(){
    document.getElementById("sText").innerHTML= "You LOSE";
    document.getElementById("computerLogo").src= "fancy pictures/win.png";
    results.L++;
  };
  function winn(){
    document.getElementById("sText").innerHTML= "You WIN";
    document.getElementById("computerLogo").src= "fancy pictures/loss.png";
    results.W++;
  };
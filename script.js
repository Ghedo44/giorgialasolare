var audio = new Audio('happy-birthday.mp3');
let container = document.getElementById("container");
container.hidden = true;

let vau = document.getElementById("vau");
vau.hidden = true;


// get the element
var typing = document.getElementById("hbt");

// text to print
var text = "Happy birthday!!!1!";

// index of the current letter
var index = 0;



function start() {

    let bottone = document.getElementById("inizio");
    bottone.hidden = true;
    container.hidden = false;

    // Get the body element
    var body = document.querySelector("body");

    // Set the background image
    body.style.backgroundImage = "url('assets/bg.png')";
    body.style.backgroundRepeat = "cover";


    audio.play();

    // start the typing effect
nextLetter();
}

// function to print the next letter
function nextLetter() {
  // add the next letter
  typing.innerHTML += text.charAt(index);
  index++;

  // check if we've reached the end of the text
  if (index < text.length) {
    setTimeout(nextLetter, 100);
  }
}


// Get all the balloon elements
var balloons = document.querySelectorAll(".balloon");

// Set the speed and direction of each balloon
var speeds = [];
var xDirections = [];
var yDirections = [];

for (var i = 0; i < balloons.length; i++) {
  speeds[i] = Math.random() * 2 + 1;
  xDirections[i] = Math.random() > 0.5 ? 1 : -1;
  yDirections[i] = Math.random() > 0.5 ? 1 : -1;
}

// Give the balloons random initial positions
for (var i = 0; i < balloons.length; i++) {
  balloons[i].style.left = Math.random() * (window.innerWidth - 50) + "px";
  balloons[i].style.top = Math.random() * (window.innerHeight - 50) + "px";
}

// Move the balloons on an interval
setInterval(function() {
  for (var i = 0; i < balloons.length; i++) {
    // Get the current position of the balloon
    var x = parseInt(balloons[i].style.left);
    var y = parseInt(balloons[i].style.top);

    // Update the position of the balloon
    x += xDirections[i] * speeds[i];
    y += yDirections[i] * speeds[i];

    // Check if the balloon has reached the edge of the screen
    if (x > window.innerWidth - 50 || x < 0) {
      xDirections[i] *= -1;
    }
    if (y > window.innerHeight - 50 || y < 0) {
      yDirections[i] *= -1;
    }

    // Update the CSS position of the balloon
    balloons[i].style.left = x + "px";
    balloons[i].style.top = y + "px";
  }
}, 10);

function apri() {
    console.log("regalo aperto");
    let container = document.getElementById("container");
    container.hidden = true;
    vau.hidden = false;
}
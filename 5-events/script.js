const _initTime = Date.now()
let displaySection = document.querySelector(".displayedsquare-wrapper");
let log = document.querySelector("ul");

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())

  // Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)
  let newDiv = document.createElement("div");
  newDiv.classList.add("displayedsquare");
  newDiv.classList.add(e.target.classList[1]);
  displaySection.append(newDiv);
  updateDisplayEvents();

  // Create a new <li> in the log below to state when the action was done
  let newLog = document.createElement("li");
  let logText = document.createTextNode("[" + getElapsedTime() + "] Created a new " + e.target.classList[1] + " square.");
  newLog.append(logText);
  log.append(newLog);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
}

// When the spacebar is hit randomly change the background color of the whole page

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  result = "rgb(" + r + ", " + g + ", " + b + ")";
  return result;
}

let keyPressed = (e) => {
  if (e.keyCode == 32) {
    let randomcolor = randomColor();
    body.style.backgroundColor = randomcolor;

    // Log when the spacebar is used the same way you used for the generated squares.
    let newLog = document.createElement("li");
    let logText = document.createTextNode("[" + getElapsedTime() + "] Changed the backgroundcolor to " + randomcolor + ".");
    newLog.append(logText);
    log.append(newLog);
  } else if (e.keyCode == 108) {
    // When the l key is pressed the log gets deleted (erases the generated <li>s).
    let lastLog = log.lastElementChild;
    while (lastLog) {
      log.removeChild(lastLog);
      lastLog = log.lastElementChild;
    }
  } else if (e.keyCode == 115) {
    // When the s key is pressed the squares get deleted (erases the generated squares)
    let lastDisplay = displaySection.lastElementChild;
    while (lastDisplay) {
      displaySection.removeChild(lastDisplay);
      lastDisplay = displaySection.lastElementChild;
    }
  }
}

// Create a system so that when a user clicks on 
// a generated square an alert pops-up with the color of that square
// https://stackoverflow.com/questions/10364298/will-the-same-addeventlistener-work#:~:text=the%20first%2C%20but%3A-,If%20multiple%20identical%20EventListeners%20are%20registered%20on%20the%20same%20EventTarget,with%20the%20removeEventListener()%20method.
let body = document.querySelector("body");
body.addEventListener("keypress", keyPressed);

let colorAlert = (e) => {
  alert(e.target.classList[1]);
}

function updateDisplayEvents() {
  for (let displaySquare of displaySection.children) {
    displaySquare.addEventListener("click", colorAlert);
  }
}
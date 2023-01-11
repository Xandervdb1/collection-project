// Create a new <section> with a random background-color 
// for each learner in your group. This section should contain a paragraph 
// with the name of the learner. Those sections should be appended in the <article>

let learners = ['Ada','Basile', 'Beatrice', 'Céline', 'Claire', 'David', 'Freke', 'James', 'Jean', 'Jitske', 'Juraj', 'Lisa', 'Marieke', 'Nick', 'Niels', 'Pious', 'Rachid', 'Raoul', 'Sander', 'Sarah', 'Seppe', 'Sofie', 'Sven', 'Tesse', 'Thomas', 'Toon', 'Vincent', 'Ward', 'Xander', 'Yousra'];
let articleEl = document.querySelector("article");
let luma;

let randomLearners = shuffleArray(learners);

for (let learner of randomLearners) {
    let section = document.createElement("section");
    let p = document.createElement("p");
    let textnode = document.createTextNode(learner);
    
    p.append(textnode);
    section.append(p);
    section.style.backgroundColor = randomColor();
    articleEl.append(section);

// If the background is dark the text should be white, if the background is light the text should be black
    if (luma < 128) { //tinycolor lib determines dark colors anything under a luma of 128
        p.style.color = "#fff";
    }
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; //standards
    // https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black
    result = "rgb(" + r + ", " + g + ", " + b + ")";
    return result;
}

// Find a way so that everytime you load the page the order of the elements changes!
// https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj#:~:text=The%20first%20and%20simplest%20way,)%20%3D%3E%200.5%20%2D%20Math.
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1)); //make a random index
        let tempIndex = array[i];
        array[i] = array[randomIndex]; //assigning current index to the random index
        array[randomIndex] = tempIndex; //taking the value at the one we just replaced and assigning it to the current one
    }
    return array;
}
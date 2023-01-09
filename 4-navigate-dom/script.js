// Select the last child of the <ol> tag and 
// put it at the beginning of the list
let ol = document.querySelector("ol");
let lastChildOl = ol.lastElementChild;

ol.prepend(lastChildOl);

// Move the <h2> of the third section in the second one and vice-versa
let main = document.querySelector("main");

    //grabbing the heading for the second section
let lastChildMain = main.lastElementChild;
let secondHeading = lastChildMain.querySelector("h2");
    //grabbing the heading for the last section
let secondChildMain = main.children[1];
let thirdHeading = secondChildMain.querySelector("h2");
    //switching the headings around
lastChildMain.querySelector("div").prepend(thirdHeading);
secondChildMain.prepend(secondHeading);

// Delete the last section from the DOM, we don't need it anyways
lastChildMain.parentElement.removeChild(lastChildMain);
// Display the document title in the console

console.log(document.title);

// Change the document title to Modifying the DOM

document.title = "Modifying the DOM";

// Change the background color of the body to hot pink (#FF69B4).

document.body.style.backgroundColor = "#FF69B4";

// try with a random color as an extra challenge

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";

// Using the children method and a for ... of  loop, display every children elements 
// of the second child element of your document (display all children elements of the <body>)

let childrenArray = document.body.children;

for (let i = 0; i < childrenArray.length; i++) {
    console.log(childrenArray[i]);
}
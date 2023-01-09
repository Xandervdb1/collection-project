// Add a title attribute to every element that has the important class, 
// stating This is an important item
let importantTags = document.querySelectorAll(".important");

for (let importantTag of importantTags) {
    importantTag.setAttribute("title", "This is an important item")
}

// Select all the img tags and loop through them. 
// If they have no important class, turn their display property to none
let imgArr = document.querySelectorAll("img");

for (let img of imgArr) {
    if (img.classList != "important") {
        img.style.display = "none";
    }
}

// Loop through all the paragraphs and display their content in the console. 
// If the paragraph has a class, display its classname as well
let paragraphArr = document.querySelectorAll("p");

for (let paragraph of paragraphArr) {
    if(paragraph.classList != "") {
        console.log("class = " + paragraph.classList.value);
    }
    console.log(paragraph.innerHTML);
}

// Give each of the paragraph a random text color (different for each one) 
// UNLESS it has a class then leave it as it is.

for (let paragraph of paragraphArr) {
    if(paragraph.classList == "") {
        paragraph.style.backgroundColor = randomColor();
    }
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    result = "rgb(" + r + ", " + g + ", " + b + ")";
    return result;
}
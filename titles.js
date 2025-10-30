const nouns = document.querySelector("#plural-noun");
const verbing = document.querySelector("#verb-ending-in--ing");
const subBtn1 = document.querySelector("#sub-btn-1");
const subBtn2 = document.querySelector("#sub-btn-2");
const modal = document.querySelector("#tt-modal");
const modalContainer = document.querySelector("#tt-modal-container");
const title = document.querySelector("#tt-title");
const resetBtn = document.querySelector("#reset-btn");
const titleEntry = document.querySelector("#title-entry");
const madlibTab = document.querySelector("#madlib-tab");
const customTab = document.querySelector("#custom-tab");
const madlib = document.querySelector("#madlib");
const custom = document.querySelector("#custom");
const titleSubmission = document.querySelector("#title-submission");
let titleText;


// EVENT LISTENERS
// Submit button for madlib title
subBtn1.addEventListener("click", () => {
    generateTitle();
    modal.classList.remove("hidden");
});


// Submit button for custom title
subBtn2.addEventListener("click", () => {
    customTitleSubmission();
    modal.classList.remove("hidden");
});

// hides modal when clicked outside of modal box
// modal.addEventListener("click", () => {
//     modal.classList.add("hidden");
// });


// 'Reset' button clears all fields and closes modal
resetBtn.addEventListener("click", () => {
    reset();
});


// keeps modal from clicking through
modalContainer.addEventListener("click", (e) => {
    e.stopPropagation();
});


// Switches between madlib and custom title tabs
madlibTab.addEventListener("click", () => {
    madlib.classList.remove("hidden");
    madlibTab.classList.add("is-active");
    custom.classList.add("hidden");
    customTab.classList.remove("is-active");
});

customTab.addEventListener("click", () => {
    madlib.classList.add("hidden");
    madlibTab.classList.remove("is-active");
    customTab.classList.add("is-active");
    custom.classList.remove("hidden");
});


// FUNCTIONS
// Takes values from inputs and generates title in title case
function generateTitle() {
    // titleText = `${verbing.value} ${nouns.value}`;
    titleText = madlib12(verbing.value, nouns.value);
    titleText = titleText.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    title.textContent = titleText;
    titleEntry.value = titleText;
}

// Resets all fields and hides modal
function reset() {
    nouns.value = "";
    verbing.value = "";
    title.textContent = "";
    titleEntry.value = "";
    titleSubmission.value = "";
    modal.classList.add("hidden");
}


// Custom title submission
function customTitleSubmission() {
    titleText = titleSubmission.value;
    title.textContent = titleText;
    titleEntry.value = titleText;
}

// class Madlib {
//     constructor({ noun, nouns, verb, verbing, adjective, place }) {
//         this.noun = noun;
//         this.nouns = nouns;
//         this.verb = verb;
//         this.verbing = verbing;
//         this.adjective = adjective;
//         this.place = place;
//     }
// }

function madlib1(nouns, verb) {
    titleText = `All the ${nouns} you ${verb}`;
    return titleText;
}

function madlib12(verbing, nouns) {
    titleText = `${verbing} the ${nouns}`;
    return titleText;
}
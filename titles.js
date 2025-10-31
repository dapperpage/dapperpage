
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

const noun = {
    text: document.querySelector("#noun"),
    container: document.querySelector("#noun-cont")
}
const nouns = {
    text: document.querySelector("#nouns"),
    container: document.querySelector("#noun-cont")
}
const verb = {
    text: document.querySelector("#verb"),
    container: document.querySelector("#verb-cont")
}
const verbing = {
    text: document.querySelector("#verb-ending-in--ing"),
    container: document.querySelector("#verbing-cont")
}
const adjective = {
    text: document.querySelector("#adjective"),
    container: document.querySelector("#adj-cont")
}
const place = {
    text: document.querySelector("#place"),
    container: document.querySelector("#place-cont")
}

const madlib1 = {
    loadFields: function() {
        nouns.container.classList.remove('hidden');
        verb.container.classList.remove('hidden');
    },

    ns: nouns.text.value,
    v: verb.text.value,

    submitTitle: function () {
        titleText = `All the ${ns} you ${v}`;
        return titleText;
    }
}

function madlib12(verbing, nouns) {
    titleText = `${verbing} the ${nouns}`;
    return titleText;
}


// EVENT LISTENERS
// When page loads start first madlib
document.addEventListener('DOMContentLoaded', () => {
    madlib1.loadFields();
});

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
    // titleText = madlib12(verbing.value, nouns.value);
    titleText = madlib1.submitTitle;
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


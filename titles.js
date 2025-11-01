
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
const madlibs = [];
const fieldTypes = [];
let titleText;
let index;

const noun = {
    text: document.querySelector("#noun"),
    container: document.querySelector("#noun-cont")
}
fieldTypes.push(noun);
const nouns = {
    text: document.querySelector("#nouns"),
    container: document.querySelector("#nouns-cont")
}
fieldTypes.push(nouns);
const verb = {
    text: document.querySelector("#verb"),
    container: document.querySelector("#verb-cont")
}
fieldTypes.push(verb);
const verbing = {
    text: document.querySelector("#verb-ending-in--ing"),
    container: document.querySelector("#verbing-cont")
}
fieldTypes.push(verbing);
const adjective = {
    text: document.querySelector("#adjective"),
    container: document.querySelector("#adj-cont")
}
fieldTypes.push(adjective);
const place = {
    text: document.querySelector("#place"),
    container: document.querySelector("#place-cont")
}
fieldTypes.push(place);

const madlib1 = {
    field1: nouns,
    field2: verb,
    title: function () {
        let ns = nouns.text.value;
        let v = verb.text.value;
        return `All the ${ns} you ${v}`;
    }
}
madlibs.push(madlib1);

const madlib2 = {
    field1: noun,
    field2: nouns,
    title: function () {
        let n = noun.text.value;
        let ns = nouns.text.value;
        return `Days of ${n} and ${ns}`;
    }
}
madlibs.push(madlib2);

const madlib3 = {
    field1: adjective,
    field2: noun,
    title: function () {
        let n = noun.text.value;
        let a = adjective.text.value;
        let article = "a";
        if (a[0] === ("a" || "e" || "i" || "o" || "u")) { article = "an" };
        return `${article} ${a} ${n}`;
    }
}
madlibs.push(madlib3);

const madlib4 = {
    field1: place,
    field2: noun,
    title: function () {
        let n = noun.text.value;
        let p = place.text.value;
        return `The ${n} from ${p}`;
    }
}
madlibs.push(madlib4);

const madlib5 = {
    field1: adjective,
    field2: noun,
    title: function () {
        let n = noun.text.value;
        let a = adjective.text.value;
        return `The ${a} side of the ${n}`;
    }
}
madlibs.push(madlib5);

const madlib6 = {
    field1: verb,
    field2: noun,
    title: function () {
        let n = noun.text.value;
        let v = verb.text.value;
        return `Someday My ${n} Will ${v}`;
    }
}
madlibs.push(madlib6);

const madlib7 = {
    field1: verbing,
    field2: place,
    title: function () {
        let p = place.text.value;
        let ving = verbing.text.value;
        return `${ving} at the ${p}`;
    }
}
madlibs.push(madlib7);

const madlib8 = {
    field1: adjective,
    field2: noun,
    title: function () {
        let a = adjective.text.value;
        let n = noun.text.value;
        return `${a} ${n}`;
    }
}
madlibs.push(madlib8);

const madlib9 = {
    field1: adjective,
    field2: noun,
    title: function () {
        let a = adjective.text.value;
        let n = noun.text.value;
        let article = "a";
        if (a[0] === ("a" || "e" || "i" || "o" || "u")) { article = "an" };
        return `${a} as ${article} ${n}`;
    }
}
madlibs.push(madlib9);

const madlib10 = {
    field1: adjective,
    field2: noun,
    title: function () {
        let a = adjective.text.value;
        let n = noun.text.value;
        let article = "a";
        if (a[0] === ("a" || "e" || "i" || "o" || "u")) { article = "an" };
        return `${a} like ${article} ${n}`;
    }
}
madlibs.push(madlib10);

const madlib11 = {
    field1: verbing,
    field2: noun,
    title: function () {
        let ving = verbing.text.value;
        let n = noun.text.value;
        return `${ving} the ${n}`;
    }
}
madlibs.push(madlib11);

const madlib12 = {
    field1: verb,
    field2: nouns,
    title: function () {
        let v = verb.text.value;
        let ns = nouns.text.value;
        return `${v} me ${ns}`;
    }
}
madlibs.push(madlib12);




// EVENT LISTENERS
// When page loads start first madlib
document.addEventListener('DOMContentLoaded', () => {
    newIndex();
    show(madlibs[index].field1, madlibs[index].field2);
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
    titleText = madlibs[index].title();
    titleText = titleText.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    title.textContent = titleText;
    titleEntry.value = titleText;
}

// Resets all fields and hides modal
function reset() {
    noun.text.value = "";
    nouns.text.value = "";
    verb.text.value = "";
    verbing.text.value = "";
    adjective.text.value = "";
    place.text.value = "";
    title.textContent = "";
    titleEntry.value = "";
    titleSubmission.value = "";
    modal.classList.add("hidden");
    newIndex();
    show(madlibs[index].field1, madlibs[index].field2);
}

// New index for madlibs
function newIndex() {
    index = Math.floor(Math.random() * madlibs.length);
}

// show the needed fields
function show(field1, field2) {
    for (let i = 0; i < fieldTypes.length; i++) {

        fieldTypes[i].container.classList.add('hidden');

    }
    field1.container.classList.remove("hidden");
    field2.container.classList.remove("hidden");
}

// Custom title submission
function customTitleSubmission() {
    titleText = titleSubmission.value;
    title.textContent = titleText;
    titleEntry.value = titleText;
}


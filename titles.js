const nouns = document.querySelector("#plural-noun");
const verbing = document.querySelector("#verb-ending-in--ing");
const subBtn1 = document.querySelector("#sub-btn-1");
const modal = document.querySelector("#tt-modal");
const modalContainer = document.querySelector("#tt-modal-container");
const title = document.querySelector("#tt-title");
const resetBtn = document.querySelector("#reset-btn");
const titleEntry = document.querySelector("#title-entry");

subBtn1.addEventListener("click", () => {
    generateTitle();
    modal.classList.remove("hidden");
});

modal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

resetBtn.addEventListener("click", () => {
    reset();
});

modalContainer.addEventListener("click", (e) => {
    e.stopPropagation();
});

function generateTitle() {
    titleText = `${verbing.value} ${nouns.value}`;
    titleText = titleText.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    title.textContent = titleText;
    titleEntry.value = titleText;
}

function reset() {
    nouns.value = "";
    verbing.value = "";
    title.textContent = "";
    titleEntry.value = "";
    modal.classList.add("hidden");
}
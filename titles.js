const nouns = document.querySelector("#plural-noun");
const verbing = document.querySelector("#verb-ending-in--ing");
const subBtn1 = document.querySelector("#sub-btn-1");
const modal = document.querySelector("#tt-modal");

subBtn1.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

modal.addEventListener("click", () => {
    modal.classList.add("hidden");
});
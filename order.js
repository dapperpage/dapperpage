getStorage(undefined, undefined, trashIcon, listIconLight);
handleFavButtons();
handleOrderButtons(trashIcon, listIconLight);

// Print Order
const printOrderBtn = document.getElementById("printOrder");

printOrderBtn.addEventListener("click", () => {
    window.print();
});
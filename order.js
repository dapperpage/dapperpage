getStorage({orderIconSrc: trashIcon, noOrderIconSrc: listIconLight});
handleFavButtons();
handleOrderButtons({orderIconSrc: trashIcon, noOrderIconSrc: listIconLight});

// Print Order
const printOrderBtn = document.getElementById("printOrder");

printOrderBtn.addEventListener("click", () => {
    window.print();
});
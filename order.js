getStorage({orderIconSrc: trashIcon, noOrderIconSrc: listIconLight});
handleFavButtons({orderIconSrc: trashIcon, noOrderIconSrc: listIconLight});
handleOrderButtons({orderIconSrc: trashIcon, noOrderIconSrc: listIconLight});
animateDropdown();

// Print Order
const printOrderBtn = document.getElementById("printOrder");

printOrderBtn.addEventListener("click", () => {
    window.print();
});
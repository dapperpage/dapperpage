getStorage({orderIconSrc: trashIcon, noOrderIconSrc: listIconLight});
handleFavButtons({orderIconSrc: trashIcon, noOrderIconSrc: listIconLight});
handleOrderButtons({orderIconSrc: trashIcon, noOrderIconSrc: listIconLight});
animateDropdown();

// Print Order
const printOrderBtn = document.getElementById("printOrder");

printOrderBtn.addEventListener("click", () => {
    const printHeading = document.querySelector(".print-heading");
    printHeading.style.display = "block"; // Show the heading for printing
    window.print();
    printHeading.style.display = "none"; // Hide the heading after printing
});
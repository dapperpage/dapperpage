getStorage({ orderIconSrc: trashIcon, noOrderIconSrc: listIconLight });
handleFavButtons({ orderIconSrc: trashIcon, noOrderIconSrc: listIconLight });
handleOrderButtons({ orderIconSrc: trashIcon, noOrderIconSrc: listIconLight });
animateDropdown();

// Print Order
const printOrderBtn = document.getElementById("printOrder");
const printHeading = document.querySelector(".print-heading");
let loaded = false;

window.addEventListener("load", () => {
    loaded = true;
});

function printOrder() {
    printHeading.style.display = "block"; // Show the heading for printing
    window.print(); // Trigger the print dialog
    printHeading.style.display = "none"; // Hide the heading after printing
}

printOrderBtn.addEventListener("click", () => {
    if (!loaded) {
        setTimeout(() => {
            if (loaded) {
                printOrder();
            }
        }, 5000);
    } else {
        printOrder();
    }
});
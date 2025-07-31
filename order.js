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

// Clear all orders
const clearOrdersBtn = document.getElementById("clearPO");
function handleClearOrders() {
    clearOrdersBtn.addEventListener("click", () => {
        clearOrders(); 
        emptyListDisplay();
    });
    // setTimeout(() => {
    //     emptyListDisplay();
    // }, 100);
}

function emptyListDisplay() {
    const orders = document.querySelectorAll('.is-order');
    const emptyList = document.getElementById("emptyList");
    const pageView = document.getElementById("pageView");
    if (orders.length === 0) {
        clearOrdersBtn.style.display = "none";
        emptyList.style.display = "block"; // Show the empty list message
        pageView.style.display = "none"; // Hide the page view if no orders
        printOrderBtn.style.display = "none"; // Hide the print button if no orders
    } else {
        clearOrdersBtn.style.display = "block";
        emptyList.style.display = "none"; // Hide the empty list message
        pageView.style.display = "block"; // Show the page view if there are orders
        printOrderBtn.style.display = "block"; // Show the print button if there are orders
    }
}

handleClearOrders();
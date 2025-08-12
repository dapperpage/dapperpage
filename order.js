getStorage({ orderIconSrc: trashIcon, noOrderIconSrc: listIconLight });
handleFavButtons({ orderIconSrc: trashIcon, noOrderIconSrc: listIconLight });
handleOrderButtons({ orderIconSrc: trashIcon, noOrderIconSrc: listIconLight });
animateDropdown();

// Check for empty list when order buttons are clicked
function orderButtonEmptyListDisplay() {
    const orderButtons = document.querySelectorAll('.order-button');
    orderButtons.forEach((order) => {
        order.addEventListener('click', () => {
            emptyListDisplay();
        });
    });
}

orderButtonEmptyListDisplay();

// Print Order
const printOrderBtn = document.getElementById("printOrder");
const printHeading = document.querySelector(".print-heading");
let loaded = false;

window.addEventListener("load", () => {
    loaded = true;
});

function printOrder() {
    window.print(); // Trigger the print dialog
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
emptyListDisplay();

// Enter address information into print page
function schoolInfo() {
    const name = document.getElementById("name");
    const school = document.getElementById("school");
    const address1 = document.getElementById("address1");
    const address2 = document.getElementById("address2");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const zip = document.getElementById("zip");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const poName = document.getElementById("poName");
    const poSchool = document.getElementById("poSchool");
    const poAddress1 = document.getElementById("poAddress1");
    const poAddress2 = document.getElementById("poAddress2");
    const poCity = document.getElementById("poCity");
    const poState = document.getElementById("poState");
    const poZip = document.getElementById("poZip");
    const poPhone = document.getElementById("poPhone");
    const poEmail = document.getElementById("poEmail");

    name.addEventListener("input", () => {
        poName.innerHTML = name.value;
    });
    school.addEventListener("input", () => {
        poSchool.innerHTML = school.value;
    });
    address1.addEventListener("input", () => {
        poAddress1.innerHTML = address1.value;
    });
    address2.addEventListener("input", () => {
        poAddress2.innerHTML = address2.value;
    });
    city.addEventListener("input", () => {
        poCity.innerHTML = city.value + ", ";
    });
    state.addEventListener("change", () => {
        poState.innerHTML = state.value + " ";
    });
    zip.addEventListener("input", () => {
        poZip.innerHTML = zip.value;
    });
    phone.addEventListener("input", () => {
        const phoneNumber = phone.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        poPhone.innerHTML = !phoneNumber[2] ? phoneNumber[1] : `(${phoneNumber[1]}) ${phoneNumber[2]}`;
    });
    email.addEventListener("input", () => {
        poEmail.innerHTML = email.value;
    });
}

schoolInfo();
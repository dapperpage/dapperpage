getStorage({ favIconSrc: trashIcon, unfavIconSrc: heartIconNoFill });
handleFavButtons({ favIconSrc: trashIcon, unfavIconSrc: heartIconNoFill });
handleOrderButtons({ favIconSrc: trashIcon, unfavIconSrc: heartIconNoFill });
animateDropdown();

// check for empty list when fav buttons are clicked
function favButtonEmptyListDisplay() {
    //const favorites = document.querySelectorAll('.is-favorite');
    const favButtons = document.querySelectorAll('.fav-button');
    favButtons.forEach((fav) => {
        fav.addEventListener('click', () => {
            emptyFavsDisplay();
        });
    });
}

favButtonEmptyListDisplay();

// Clear all favorites
const clearFavsBtn = document.getElementById("clearFavs");
function handleClearFavorites() {
    clearFavsBtn.addEventListener("click", () => {
        clearFavorites();
        emptyFavsDisplay();
    });
}

function emptyFavsDisplay() {
    const favorites = document.querySelectorAll('.is-favorite');
    const emptyList = document.getElementById("emptyList");
    if (favorites.length === 0) {
        clearFavsBtn.style.display = "none";
        emptyList.style.display = "block"; // Show the empty list message
    } else {
        clearFavsBtn.style.display = "block";
        emptyList.style.display = "none"; // Hide the empty list message
    }
    // while (favorites.length > 0) {
    //     clearFavsBtn.style.display = "block";
    //     emptyList.style.display = "none"; // Hide the empty list message
    // }
    // clearFavsBtn.style.display = "none";
    // emptyList.style.display = "block"; // Show the empty list message
}

handleClearFavorites();
emptyFavsDisplay();


getStorage({favIconSrc: trashIcon, unfavIconSrc: heartIconNoFill});
handleFavButtons({favIconSrc: trashIcon, unfavIconSrc: heartIconNoFill});
handleOrderButtons({favIconSrc: trashIcon, unfavIconSrc: heartIconNoFill});
animateDropdown();

// Clear all favorites
const clearFavsBtn = document.getElementById("clearFavs");
function handleClearFavorites() {
    clearFavsBtn.addEventListener("click", () => {clearFavorites();});
    displayClearFavoritesButton();
}

function displayClearFavoritesButton() {
    const favorites = document.querySelectorAll('.is-favorite');
    if (favorites.length === 0) {
        clearFavsBtn.style.display = "none";
    } else {
        clearFavsBtn.style.display = "block";
    }
}

handleClearFavorites();
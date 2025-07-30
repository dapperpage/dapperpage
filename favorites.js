getStorage({favIconSrc: trashIcon, unfavIconSrc: heartIconNoFill});
handleFavButtons({favIconSrc: trashIcon, unfavIconSrc: heartIconNoFill});
handleOrderButtons({favIconSrc: trashIcon, unfavIconSrc: heartIconNoFill});
animateDropdown();

// Clear all favorites
const clearFavsBtn = document.getElementById("clearFavs");
const favs = document.querySelectorAll('.is-favorite');
clearFavsBtn.addEventListener("click", () => {clearFavorites();});
if (favs.length === 0) {
    clearFavsBtn.style.display = "none";
} else {
    clearFavsBtn.style.display = "block";
}

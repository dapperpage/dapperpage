getStorage({favIconSrc: trashIcon, unfavIconSrc: heartIconNoFill});
handleFavButtons({favIconSrc: trashIcon, unfavIconSrc: heartIconNoFill});
handleOrderButtons({favIconSrc: trashIcon, unfavIconSrc: heartIconNoFill});

// Clear all favorites
const clearFavsBtn = document.getElementById("clearFavs");
const items = document.querySelectorAll('.item');
clearFavsBtn.addEventListener("click", () => {clearFavorites();});
if (items.length === 0) {
    clearFavsBtn.style.display = "none";
} else {
    clearFavsBtn.style.display = "block";
}

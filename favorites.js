getStorage({favIconSrc: trashIcon, unfavIconSrc: heartIconNoFill});
handleFavButtons({favIconSrc: trashIcon, unfavIconSrc: heartIconNoFill});
handleOrderButtons({favIconSrc: trashIcon, unfavIconSrc: heartIconNoFill});

// Clear all favorites
const clearFavsBtn = document.getElementById("clearFavs");
clearFavsBtn.addEventListener("click", () => {clearFavorites();});
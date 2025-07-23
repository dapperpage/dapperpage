getStorage();
handleFavButtons();

function updateFavButtons() {
  const favButtons = document.querySelectorAll('.fav-button');
  favButtons.forEach(button => {
    const icon = button.querySelector('img');
    icon.src = "https://cdn.prod.website-files.com/640788df21cddc9b2f29bc16/68816bd4316039697c5cf107_trash-solid-full.svg"
  });
}

updateFavButtons();
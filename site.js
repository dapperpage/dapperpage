// // Check for favorites  
// $(".track-item").each(function (index) {
//    let itemName = $(this).find('.track-title').text();
//    let storageName = localStorage.getItem(itemName);
//    if (storageName == "isFavorite") {
//       $(this).addClass('is-favorite');
//    }
// });


// // Add or remove favorites
// $('.favorite').on('click', function () {
//    let savedParent = $(this).closest('.track-item');
//    let parentIndex = savedParent.index();
//    let title = savedParent.find('.track-title').text();
//    savedParent.toggleClass('is-favorite');
//    savedParent.closest('.track-list-wrapper').siblings('.track-list-wrapper').find('.track-item').eq(parentIndex).toggleClass('is-favorite');
//    if (savedParent.hasClass('is-favorite')) {
//       let storageName = title;
//       localStorage.setItem(storageName, "isFavorite");
//    } else {
//       let storageName = title;
//       localStorage.removeItem(storageName);
//    }
// });

// // Clear favorites
// $('.reset').on('click', function () {
//    $('.track-item').each(function (index) {
//       $(this).removeClass('is-favorite');
//       let title = $(this).find('.track-title').text();
//       let storageName = title;
//       if (localStorage.getItem(storageName) === "isFavorite") {
//          localStorage.removeItem(storageName);
//       }
//    });
//    //   setTimeout('window.location.href = "https://www.dapperpage.com/conference-interaction/listen-conference"', 3000); //this line is for redirecting after clearing favorites from conference interaction page
// });

// Favorite Item Class
class FavoriteItem {
   constructor(title, url, composer, arranger, price, sku, favorite = false, order = false) {
      this.title = title;
      this.url = url;
      this.composer = composer;
      this.arranger = arranger;
      this.price = price;
      this.sku = sku;
      this.favorite = favorite;
      this.order = order;
   }
}

// Get Local Storage
function getStorage() {
   const items = document.querySelectorAll('.item');
   items.forEach((item) => {
      const title = item.dataset.title;
      const favButton = item.querySelector('.fav-button');
      const favIcon = favButton.querySelector('img');
      if (!localStorage.getItem(title)) {
         populateStorage(item);
      } else {
         const listItem = localStorage.getItem(title);
         const parsedItem = JSON.parse(listItem);
         if (parsedItem.favorite) {
            item.classList.add('is-favorite');
            favIcon.src = "https://cdn.prod.website-files.com/640788df21cddc9b2f29bc16/68783b6bd8c41c933269ad27_heart-solid%20(1).svg";
         } else {
            item.classList.remove('is-favorite');
            favIcon.src = "https://cdn.prod.website-files.com/640788df21cddc9b2f29bc16/68783b97f7f86dbb71aeef0c_heart-regular%20(1).svg";
         }
         if (parsedItem.order) {
            item.classList.add('is-order');
         }
      }
   });
}

// Set Local Storage
function setStorage(storageItem, key, value) {
   const data = localStorage.getItem(storageItem.dataset.title);
   const parsedData = JSON.parse(data);
   parsedData[key] = value;
   const newData = JSON.stringify(parsedData);
   localStorage.setItem(storageItem.dataset.title, newData);
}

// Populate Local Storage
function populateStorage(storageItem, favorite = false) {
   const obj = new FavoriteItem(
      storageItem.dataset.title,
      storageItem.dataset.url,
      storageItem.dataset.composer,
      storageItem.dataset.arranger,
      storageItem.dataset.price,
      storageItem.dataset.sku,
      favorite
   );
   const objString = JSON.stringify(obj);
   localStorage.setItem(storageItem.dataset.title, objString);
}


// Add to Favorites
function addToFavorites(storageItem) {
   const listItem = localStorage.getItem(storageItem.dataset.title);
   const parsedItem = JSON.parse(listItem);
   parsedItem.favorite = true;
   const newItem = JSON.stringify(parsedItem);
   localStorage.setItem(storageItem.dataset.title, newItem);
   storageItem.classList.add('is-favorite');
}


// Remove from Favorites
function removeFromFavorites(storageItem) {
   const listItem = localStorage.getItem(storageItem.dataset.title);
   const parsedItem = JSON.parse(listItem);
   parsedItem.favorite = false;
   const newItem = JSON.stringify(parsedItem);
   localStorage.setItem(storageItem.dataset.title, newItem);
   storageItem.classList.remove('is-favorite');
}


// Clear Favorites
function clearFavorites() {
   items.forEach((item) => {
      const title = item.dataset.title;
      if (localStorage.getItem(title)) {
         removeFromFavorites(item);
      }
   });
}


// Add to Order
function addToOrder(storageItem) {
   const listItem = localStorage.getItem(storageItem.dataset.title);
   const parsedItem = JSON.parse(listItem);
   parsedItem.order = true;
   const newItem = JSON.stringify(parsedItem);
   localStorage.setItem(storageItem.dataset.title, newItem);
   storageItem.classList.add('is-order');
}


// Remove from Order
function removeFromOrder(storageItem) {
   const listItem = localStorage.getItem(storageItem.dataset.title);
   const parsedItem = JSON.parse(listItem);
   parsedItem.order = false;
   const newItem = JSON.stringify(parsedItem);
   localStorage.setItem(storageItem.dataset.title, newItem);
   storageItem.classList.remove('is-order');
}


// Clear Order
function clearOrder() {
   items.forEach((item) => {
      const title = item.dataset.title;
      if (localStorage.getItem(title)) {
         removeFromOrder(item);
      }
   });
}


//Handle fav buttons
function handleFavButtons() {
   const favButtons = document.querySelectorAll('.fav-button');
   favButtons.forEach(button => {
      button.addEventListener('click', function (e) {
         const icon = button.querySelector('img');
         const item = button.closest('.item');

         if (item.classList.contains('is-favorite')) {
            removeFromFavorites(item);
            icon.src = "https://cdn.prod.website-files.com/640788df21cddc9b2f29bc16/68783b97f7f86dbb71aeef0c_heart-regular%20(1).svg";
         } else {
            if (!localStorage.getItem(item.dataset.title)) {
               populateStorage(item, true);
            } else {
               addToFavorites(item);
            }
            icon.src = "https://cdn.prod.website-files.com/640788df21cddc9b2f29bc16/68783b6bd8c41c933269ad27_heart-solid%20(1).svg";
         }

         getStorage(); // Refresh storage to ensure the latest state is reflected
      });
   });
}
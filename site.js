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

// Icons for favorites and delete
const heartIconNoFill = "https://cdn.prod.website-files.com/640788df21cddc9b2f29bc16/68783b97f7f86dbb71aeef0c_heart-regular%20(1).svg";
const heartIconFill = "https://cdn.prod.website-files.com/640788df21cddc9b2f29bc16/68783b6bd8c41c933269ad27_heart-solid%20(1).svg";
const trashIcon = "https://cdn.prod.website-files.com/640788df21cddc9b2f29bc16/68816bd4316039697c5cf107_trash-solid-full.svg";


// Get Local Storage
function getStorage(favIconSrc = heartIconFill, unfavIconSrc = heartIconNoFill) {
   const items = document.querySelectorAll('.item');
   items.forEach((item) => {
      const title = item.dataset.title;
      const favButton = item.querySelector('.fav-button');
      const favIcon = favButton.querySelector('img');
      let parsedItem;
      try {
         const listItem = localStorage.getItem(title);
         parsedItem = JSON.parse(listItem);
      } catch (error) {
         localStorage.removeItem(title);
      }
      if (!localStorage.getItem(title)) {
         populateStorage(item);
      } else {

         if (parsedItem.favorite) {
            item.classList.add('is-favorite');
            favIcon.src = favIconSrc;
         } else if (!parsedItem.favorite) {
            item.classList.remove('is-favorite');
            favIcon.src = unfavIconSrc;
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
function handleFavButtons(favIconSrc = heartIconFill, unfavIconSrc = heartIconNoFill) {
   const favButtons = document.querySelectorAll('.fav-button');
   favButtons.forEach(button => {
      button.addEventListener('click', function (e) {
         const icon = button.querySelector('img');
         const item = button.closest('.item');

         if (item.classList.contains('is-favorite')) {
            removeFromFavorites(item);
            icon.src = unfavIconSrc;
         } else {
            if (!localStorage.getItem(item.dataset.title)) {
               populateStorage(item, true);
            } else {
               addToFavorites(item);
            }
            icon.src = favIconSrc;
         }

         getStorage(); // Refresh storage to ensure the latest state is reflected
      });
   });
}
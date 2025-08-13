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
const heartIconFill = "https://cdn.prod.website-files.com/640788df21cddc9b2f29bc16/68824556b50df7378d1d4a80_heart-solid-full.svg";
const trashIcon = "https://cdn.prod.website-files.com/640788df21cddc9b2f29bc16/68816bd4316039697c5cf107_trash-solid-full.svg";
const listIconLight = "https://cdn.prod.website-files.com/640788df21cddc9b2f29bc16/688248578addfae1971158bc_table-list-solid-full%20(1).svg";
const listIcontDark = "https://cdn.prod.website-files.com/640788df21cddc9b2f29bc16/6882455b26174fa6bb8b9d08_table-list-solid-full.svg";


// Get Local Storage
function getStorage({ favIconSrc = heartIconFill, unfavIconSrc = heartIconNoFill, orderIconSrc = listIcontDark, noOrderIconSrc = listIconLight } = {}) {
   const items = document.querySelectorAll('.item');
   items.forEach((item) => {
      const title = item.dataset.title;
      //const favButton = item.querySelector('.fav-button');
      const favIcon = item.querySelector('.heart-icon');
      const orderIcon = item.querySelector('.order-icon');
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
            orderIcon.src = orderIconSrc;
         } else if (!parsedItem.order) {
            item.classList.remove('is-order');
            orderIcon.src = noOrderIconSrc;
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
function populateStorage(storageItem, favorite = false, order = false) {
   const obj = new FavoriteItem(
      storageItem.dataset.title,
      storageItem.dataset.url,
      storageItem.dataset.composer,
      storageItem.dataset.arranger,
      storageItem.dataset.price,
      storageItem.dataset.sku,
      favorite,
      order
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
   const items = document.querySelectorAll('.item');
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
function clearOrders() {
   const items = document.querySelectorAll('.item');
   items.forEach((item) => {
      const title = item.dataset.title;
      if (localStorage.getItem(title)) {
         removeFromOrder(item);
      }
   });
}

//Handle fav buttons
function handleFavButtons({ favIconSrc = heartIconFill, unfavIconSrc = heartIconNoFill, orderIconSrc = listIcontDark, noOrderIconSrc = listIconLight } = {}) {
   const favButtons = document.querySelectorAll('.fav-button');
   favButtons.forEach(button => {
      button.addEventListener('click', function (e) {
         e.stopPropagation();
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

         getStorage({ favIconSrc: favIconSrc, unfavIconSrc: unfavIconSrc, orderIconSrc: orderIconSrc, noOrderIconSrc: noOrderIconSrc }); // Refresh storage to ensure the latest state is reflected
      });
   });
}

//Handle order buttons
function handleOrderButtons({ favIconSrc = heartIconFill, unfavIconSrc = heartIconNoFill, orderIconSrc = listIcontDark, noOrderIconSrc = listIconLight } = {}) {
   const orderButtons = document.querySelectorAll('.order-button');
   orderButtons.forEach(button => {
      button.addEventListener('click', function (e) {
         e.stopPropagation();
         const icon = button.querySelector('img');
         const item = button.closest('.item');

         if (item.classList.contains('is-order')) {
            removeFromOrder(item);
            icon.src = noOrderIconSrc;
         } else {
            if (!localStorage.getItem(item.dataset.title)) {
               populateStorage(item, false, true);
            } else {
               addToOrder(item);
            }
            icon.src = orderIconSrc;
         }

         getStorage({ favIconSrc: favIconSrc, unfavIconSrc: unfavIconSrc, orderIconSrc: orderIconSrc, noOrderIconSrc: noOrderIconSrc }); // Refresh storage to ensure the latest state is reflected
      });
   });
}

// Animate CTA dropdown menu
function animateDropdown() {
   const menus = document.querySelectorAll(".item-button-menu-wrapper");

   menus.forEach((menu) => {
      const menuIcon = menu.querySelector(".item-button-menu-icon");
      const menuContent = menu.querySelector(".item-button-container");
      const overlay = menu.querySelector(".overlay");

      menuIcon.addEventListener("click", (e) => {
         e.stopPropagation();
         menuContent.classList.toggle("animation");
         overlay.classList.toggle("block");
      });

      overlay.addEventListener("click", (e) => {
         e.stopPropagation();
         menuContent.classList.remove("animation");
         overlay.classList.remove("block");
      });

      menuContent.addEventListener("click", (e) => {
         e.stopPropagation();
      });
   });
}

// If free guide is in local storage, hide free guide button and section
function hideFreeGuide() {
   const freeGuideSection = document.getElementById("freeGuideSection");
   const freeGuideModalButton = document.getElementById("freeModalTrigger");

   if (localStorage.getItem("freeGuide")) {
      freeGuideSection.style.display = "none";
      freeGuideModalButton.style.display = "none";
   }
}

hideFreeGuide();

// If free guide is downloaded, set local storage item
function setFreeGuide() {
   const freeGuideButtons = document.getElementsByClassName("free-guide-button");

   // freeGuideButtons.forEach((button) => button.addEventListener("click", () => {
   //    localStorage.setItem("freeGuide", "true");
   //    hideFreeGuide();
   // }));
   freeGuideButtons.forEach((button) => {
      console.log(button);
   });
}

setFreeGuide();
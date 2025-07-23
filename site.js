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
   constructor(title, url, price, sku, favorite = false, order = false) {
      this.title = title;
      this.url = url;
      this.price = price;
      this.sku = sku;
      this.favorite = favorite;
      this.order = order;
   }
}
const items = document.querySelectorAll('.item');
console.log(items);
// Get Local Storage


// Set Local Storage
function setStorage() {}

// Populate Local Storage


// Add to Favorites


// Remove from Favorites


// Clear Favorites


// Add to Order


// Remove from Order


// Clear Order


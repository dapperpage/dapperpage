 //v.1.0.0
 
 $(".is-favorite").each(function (index) {
  let itemName = $(this).find('.track-title').text();
  let itemURL = "https://www.dapperpage.com/dapper-page-titles/" + $(this).find('.url-slug').text();
  let storageName = localStorage.getItem(itemName);
  if(storageName == "isFavorite") {
   console.log(itemURL);
  }
});


//from Favorites Conference page
$('.favorite-item-container').on('click', function() {
  $(this).toggleClass('is-favorite');
});


const fav = document.getElementById('favorites');
fav.value = "<table style='boarder: 5px solid black;' width=400px>"
 $(".is-favorite").each(function (index) {
  let itemName = $(this).find('.track-title').text();
  let itemImg = $(this).find('.fav-img');
  let itemID = $(this).find('.pub-id').text();
  let itemPrice = $(this).find('.fav-price').text();
  let itemURL = "https://www.dapperpage.com/dapper-page-titles/" + $(this).find('.url-slug').text();
  let storageName = localStorage.getItem(itemName);
  if(storageName == "saved") {
    fav.value += "<tr><td style='border: 1px solid black; padding: 1rem; color: #333;'>" + itemID + "</td><td style='border: 1px solid black; padding: 1rem; color: #333;'><a href='" + itemURL + "'>" + itemName + "</a></td><td style='border: 1px solid black; padding: 1rem; color: #333;'>" + itemPrice + "</td></tr>";
  }
});
fav.value += "</table>"

//reset on email submit
$('#fav-email').on('click', function() {
  $('#reset').click();
  $('.back-to-list-button').click();
});

//print page
$("#fav-print").click(function() { window.print(); });
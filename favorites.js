 $(".is-favorite").each(function (index) {
  let itemName = $(this).find('.track-title').text();
  let itemURL = "https://www.dapperpage.com/dapper-page-titles/" + $(this).find('.url-slug').text();
  let storageName = localStorage.getItem(itemName);
  if(storageName == "isFavorite") {
   console.log(itemURL);
  }
});

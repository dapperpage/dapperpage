// Check for favorites  
$(".track-item").each(function (index) {
   let itemName = $(this).find('.track-title').text();
   let storageName = localStorage.getItem(itemName);
   if (storageName == "isFavorite") {
      $(this).addClass('is-favorite');
   }
});


// Add or remove favorites
$('.favorite').on('click', function () {
   let savedParent = $(this).closest('.track-item');
   let parentIndex = savedParent.index();
   let title = savedParent.find('.track-title').text();
   savedParent.toggleClass('is-favorite');
   savedParent.closest('.track-list-wrapper').siblings('.track-list-wrapper').find('.track-item').eq(parentIndex).toggleClass('is-favorite');
   if (savedParent.hasClass('is-favorite')) {
      let storageName = title;
      localStorage.setItem(storageName, "isFavorite");
   } else {
      let storageName = title;
      localStorage.removeItem(storageName);
   }
});

// Clear favorites
$('.reset').on('click', function () {
   $('.track-item').each(function (index) {
      $(this).removeClass('is-favorite');
      let title = $(this).find('.track-title').text();
      let storageName = title;
      if (localStorage.getItem(storageName) === "isFavorite") {
         localStorage.removeItem(storageName);
      }
   });
   //   setTimeout('window.location.href = "https://www.dapperpage.com/conference-interaction/listen-conference"', 3000); //this line is for redirecting after clearing favorites from conference interaction page
});


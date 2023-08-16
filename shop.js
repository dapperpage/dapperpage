//SCROLL BUTTONS//
function scrollR(x) {
    var scrollWindow = document.getElementsByClassName("items-slider")[x];
     scrollWindow.scrollBy({
      top: +0,
      left: +1000,
      behavior: 'smooth'
    }) 
  }
  
  function scrollL(x) {
    var scrollWindow = document.getElementsByClassName("items-slider")[x];
    scrollWindow.scrollBy({
      top: +0,
      left: -1000,
      behavior: 'smooth'
    }) 
  }
  
  //PLAY ON HOVER AND AUTOPLAY WHEN IN SCREEN ON MOBILE//
  document.addEventListener('DOMContentLoaded', function() {
    var hoverImages = document.getElementsByClassName('hover-image');
    //var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // Check if the device has a touchscreen and no mouse
    const hasTouchScreen = matchMedia("(pointer: coarse)").matches;
    const hasMouse = matchMedia("(pointer: fine)").matches;
    var isMobile = (hasTouchScreen && !hasMouse);

   

    console.log(isMobile);
    const scrollWindow = document.querySelector('.items-slider');  
    
    if (isMobile) {
      // Create an Intersection Observer instance
      const width = window.innerWidth;
      const rm = 300 - width;
      console.log(rm);
      const options = {
              root: null,
              threshold: 0,
              rootMargin: "-30% " + rm + "px -30% -16px"
          };
      
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var audioElement = entry.target.querySelector('audio');
            audioElement.play();
            entry.target.closest('.item-container').classList.add('flipped');
          } else {
            var audioElement = entry.target.querySelector('audio');
            audioElement.pause();
            audioElement.currentTime = 0;
            entry.target.closest('.item-container').classList.remove('flipped');
          }
        });
      }, options);

      observer.rootMargin.style.border = "1px solid green";
  
      // Attach the observer to each hover image
      Array.from(hoverImages).forEach(function(hoverImage) {
        observer.observe(hoverImage);
      });
    } else {
      // Attach event listeners for mouseover and mouseout events
      Array.from(hoverImages).forEach(function(hoverImage) {
        var audioElement = hoverImage.querySelector('audio');
  
        hoverImage.addEventListener('mouseover', function() {
          audioElement.play();
        });
  
        hoverImage.addEventListener('mouseout', function() {
          audioElement.pause();
          audioElement.currentTime = 0;
        });
      });
    }
  });  
  
  //GLOBAL MUTE BUTTON//
  document.addEventListener('DOMContentLoaded', function() {
        var muteButton = document.getElementById('muteButton');
       
        muteButton.addEventListener('click', toggleMute);
      });
      
      function toggleMute() {
        var muteButton = document.getElementById('muteButton');
        var muteIcon = document.getElementById('muteIcon');
        var unmuteIcon = document.getElementById('unmuteIcon');
        
        if (muteButton.classList.contains('muted')) {
          // Unmute the page
          unmutePage();
          muteButton.classList.remove('muted');
          muteIcon.classList.remove('muted');
          unmuteIcon.classList.remove('muted');
          Cookies.set("autoplay", "true", { expires: 365 });
        } else {
          // Mute the page
          mutePage();
          muteButton.classList.add('muted');
          muteIcon.classList.add('muted');
          unmuteIcon.classList.add('muted');
          Cookies.set("autoplay", "false", { expires: 365 });
        }
      }
      
      function mutePage() {
        // Mute all audio elements on the page
        var audioElements = document.querySelectorAll('audio');
        
        audioElements.forEach(function(audioElement) {
          audioElement.muted = true;
        });
      }
      
      function unmutePage() {
        // Unmute all audio elements on the page
        var audioElements = document.querySelectorAll('audio');
        
        audioElements.forEach(function(audioElement) {
          audioElement.muted = false;
        });
      }
      
      var explore = document.querySelectorAll('.explore');
      //explore.addEventListener ('click', whiteBoy);
  
      
      function whiteBoy() {
        console.log('play that funky music');
        
        toggleMute();
        toggleMute();
      }
  
      explore.forEach((item) => {
          item.addEventListener('click', whiteBoy)
      });
      
      //Auto Play Buttons
      const soundOn = document.getElementById("soundOn");
      const soundOff = document.getElementById("soundOff");
      const soundModal = document.querySelector(".sound-on");
      
     soundOn.addEventListener("click", () => {
         Cookies.set("autoplay", "true", { expires: 365 });
     })
     
     soundOff.addEventListener("click", () => {
         Cookies.set("autoplay", "false", { expires: 365 });
     })
     
      if (Cookies.get("autoplay") == "true") {
     soundModal.style.display = "none";
     unmutePage();
          muteButton.classList.remove('muted');
          muteIcon.classList.remove('muted');
          unmuteIcon.classList.remove('muted');
  } else if (Cookies.get("autoplay") == "false") {
          soundModal.style.display = "none";
      mutePage();
          muteButton.classList.add('muted');
          muteIcon.classList.add('muted');
          unmuteIcon.classList.add('muted');
  } else {
          soundModal.style.display = "flex";
  }
  
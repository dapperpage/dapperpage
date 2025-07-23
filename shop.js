getStorage();
handleFavButtons();

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
    const width = window.innerWidth;
    const docWidth = document.documentElement.clientWidth;
    const screenWidth = window.screen.width;
    const mobileDevice = isMobile.any;
    const scrollWindow = document.querySelector('.items-slider');  
    
    if (mobileDevice) {
      // Create an Intersection Observer instance
      const rm = 300 - screenWidth;
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
  
      // Attach the observer to each hover image
      Array.from(hoverImages).forEach(function(hoverImage) {
        observer.observe(hoverImage);
      });
    } else {
      // Attach event listeners for mouseover and mouseout events
      Array.from(hoverImages).forEach(function(hoverImage) {
        const audioElement = hoverImage.querySelector('audio');
  
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
        const muteButton = document.getElementById('muteButton');
       
        muteButton.addEventListener('click', toggleMute);
      });
      
      function toggleMute() {
        const muteButton = document.getElementById('muteButton');
        const muteIcon = document.getElementById('muteIcon');
        const unmuteIcon = document.getElementById('unmuteIcon');
        
        if (muteButton.classList.contains('muted')) {
          // Unmute the page
          unmutePage();
          muteButton.classList.remove('muted');
          muteIcon.classList.remove('muted');
          unmuteIcon.classList.remove('muted');
          localStorage.setItem("autoplay", "true");
        } else {
          // Mute the page
          mutePage();
          muteButton.classList.add('muted');
          muteIcon.classList.add('muted');
          unmuteIcon.classList.add('muted');
          localStorage.setItem("autoplay", "false");
        }
      }
      
      function mutePage() {
        // Mute all audio elements on the page
        const audioElements = document.querySelectorAll('audio');
        
        audioElements.forEach(function(audioElement) {
          audioElement.muted = true;
        });
      }
      
      function unmutePage() {
        // Unmute all audio elements on the page
        const audioElements = document.querySelectorAll('audio');
        
        audioElements.forEach(function(audioElement) {
          audioElement.muted = false;
        });
      }
      
      const explore = document.querySelectorAll('.explore');
      //explore.addEventListener ('click', whiteBoy);
  
      
      function whiteBoy() {        
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
         localStorage.setItem("autoplay", "true");
     })
     
     soundOff.addEventListener("click", () => {
         localStorage.setItem("autoplay", "false");
     })
     
      if (localStorage.getItem("autoplay") == "true") {
     soundModal.style.display = "none";
     unmutePage();
          muteButton.classList.remove('muted');
          muteIcon.classList.remove('muted');
          unmuteIcon.classList.remove('muted');
  } else if (localStorage.getItem("autoplay") == "false") {
          soundModal.style.display = "none";
      mutePage();
          muteButton.classList.add('muted');
          muteIcon.classList.add('muted');
          unmuteIcon.classList.add('muted');
  } else {
          soundModal.style.display = "flex";
  }

  // Favorite Icon
const favIcon = document.querySelectorAll('.favorite');
console.log(favIcon);
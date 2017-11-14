let hamburgerMenu = document.getElementById('hamburger-menu-link');
let block = document.getElementById('about');
let buttonClose = document.getElementById('img-close');
let hiddenMenu = document.getElementById('drop-about');


      hamburgerMenu.addEventListener('click', function() {
      block.style.opacity = '0';
      hiddenMenu.style.opacity = '1';
      hiddenMenu.style.zIndex++;
     })

			buttonClose.addEventListener('click', function() {
      block.style.opacity = '1';
      hiddenMenu.style.opacity = '0';
      hiddenMenu.style.zIndex--;
     })

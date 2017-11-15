//about
let hamburgerMenu = document.getElementById('hamburger-menu-link');
let block = document.getElementById('about');
let buttonClose = document.getElementById('img-close');
let hiddenMenu = document.getElementById('drop-about');


      hamburgerMenu.addEventListener('click', function() {
      block.style.opacity = '0';
      hiddenMenu.style.opacity = '1';
      hiddenMenu.style.zIndex++;
      hiddenMenu.style.position = 'fixed';
     })

			buttonClose.addEventListener('click', function() {
      block.style.opacity = '1';
      hiddenMenu.style.opacity = '0';
      hiddenMenu.style.zIndex--;
      hiddenMenu.style.position = 'absolute';
     })

//team
$(document).ready ( () => {

      $('.main-team__trigger').on('click', (e) => {
        console.log('ghbdtnm');

  $(e.currentTarget).parent('.main-team__item').toggleClass('main-team__item--activ');
  
})
})

/*
 $(document).ready(function() {

      $('.main-team__trigger').click( function() {

  $(this).parent('.main-team__item').toggleClass('main-team__item--activ');
  
})
})
*/



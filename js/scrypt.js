//about
let hamburgerMenu = document.getElementById('hamburger-menu-link');
let block = document.getElementById('about');
let buttonClose = document.getElementById('img-close');
let hiddenMenu = document.getElementById('drop-about');


      hamburgerMenu.addEventListener('click', function() {
      //block.style.opacity = '0';
      hiddenMenu.style.display = 'block';
      hiddenMenu.style.opacity = '1';
     // hiddenMenu.style.zIndex++;
      //hiddenMenu.style.position = 'fixed';
     })

			buttonClose.addEventListener('click', function() {
      //block.style.opacity = '1';
      hiddenMenu.style.display = 'none';
      hiddenMenu.style.opacity = '0';
      //hiddenMenu.style.zIndex--;
      //hiddenMenu.style.position = 'absolute';
     })

//team
/*
$(document).ready ( () => {

      $('.main-team__trigger').on('click', (e) => {

  $(e.currentTarget).parent('.main-team__item').toggleClass('main-team__item--activ');
  
})
})
*/
/*
$(document).ready(function(){
   //$(".main-team__acco .main-team__item:first").addClass("main-team__item--activ");
    //$(".accordion .main-team__drop:not(:first)").hide();

    $(".main-team__trigger").click(function(){

        $(this).next(".main-team__drop").slideToggle("slow")
        .siblings(".main-team__drop:visible").slideUp("slow");
        $(this).toggleClass("main-team__item--activ");
        $(this).siblings(".main-team__item").removeClass("main-team__item--activ");
     });
 
 });
*/

 $(document).ready ( () => {

      $('.main-team__trigger').on('click', (e) => {

  $(e.currentTarget).parent('.main-team__item').toggleClass('main-team__item--activ');
  $(e.currentTarget).parent('.main-team__item').siblings().removeClass('main-team__item--activ');
  
})
})


//menu

$(document).ready ( () => {

      $('.acco-menu__trigger').on('click', (e) => {

  $(e.currentTarget).parent('.acco-menu__item').toggleClass('acco-menu__item--activ');
  $(e.currentTarget).parent('.acco-menu__item').siblings().removeClass('acco-menu__item--activ');
  
})
})


/*
$(document).ready ( () => {

      $('.acco-menu__trigger').on('click', (e) => {
        

  $(e.currentTarget).parent('.acco-menu__item').toggleClass('acco-menu__item--activ');
  
})
})

*/

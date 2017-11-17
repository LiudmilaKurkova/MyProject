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
//
$('.main-team__trigger').on('click', e => {
   
    const $this = $(e.currentTarget);
    const container = $this.closest('.main-team__acco');
    const item = $this.closest('.main-team__item');
    const items = $('.main-team__item', container);
    const content = $('.main-team__drop', item);
    const otherContent = $('.main-team__drop', container);
    const textBlock = $('.main-team__text', item);
    const reqHeight = textBlock.outerHeight();

     console.log(textBlock);
        console.log(reqHeight);

    if (!item.hasClass('main-team__item--activ')) {
      items.removeClass('main-team__item--activ')
      item.addClass('main-team__item--activ')

      otherContent.css({
        'height': 0
      })

      content.css({
        'height': reqHeight
      })

    } else {

      item.removeClass('main-team__item--activ');
      content.css({
        'height' : 0
      })
    }

  })




//menu

$(document).ready ( () => {

      $('.acco-menu__trigger').on('click', (e) => {

  $(e.currentTarget).parent('.acco-menu__item').toggleClass('acco-menu__item--activ');
  $(e.currentTarget).parent('.acco-menu__item').siblings().removeClass('acco-menu__item--activ');
  
})
})




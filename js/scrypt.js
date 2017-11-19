//about-hamburger--------------------------------------------

let hamburgerMenu = document.getElementById('hamburger-menu-link');
let block = document.getElementById('about');
let buttonClose = document.getElementById('img-close');
let hiddenMenu = document.getElementById('drop-about');
let blockBody = document.getElementById('MyBody');


      hamburgerMenu.addEventListener('click', function() {
      //block.style.opacity = '0';
      hiddenMenu.style.display = 'block';
      hiddenMenu.style.opacity = '1';
      blockBody.className = 'locked';
      // hiddenMenu.style.zIndex++;
      //hiddenMenu.style.position = 'fixed';
     })

			buttonClose.addEventListener('click', function() {
      //block.style.opacity = '1';
      hiddenMenu.style.display = 'none';
      hiddenMenu.style.opacity = '0';
      blockBody.className = '';
      //hiddenMenu.style.zIndex--;
      //hiddenMenu.style.position = 'absolute';
     })

//team-acco---------------------------------------------

$('.main-team__trigger').on('click', e => {
   
    const $this = $(e.currentTarget);
    const container = $this.closest('.main-team__acco');
    const item = $this.closest('.main-team__item');
    const items = $('.main-team__item', container);
    const content = $('.main-team__drop', item);
    const otherContent = $('.main-team__drop', container);
    const textBlock = $('.main-team__text', item);
    const reqHeight = textBlock.outerHeight();

     //console.log(textBlock);
        //console.log(reqHeight);

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




//menu-acco ----------------------------------------------
$(document).ready ( () => {

  const calculateWidth = () => {
    const wWidth = $(window).width();
    const titles = $('.acco-menu__trigger');
    const titleWidth = titles.width();
    const reqWidth = wWidth - (titleWidth * titles.length);
    //console.log(titles.length);

    return (reqWidth > 540) ? 540 : reqWidth
  }

  const openItem = item => {
    const container = $('.acco-menu')
    const items = $('.acco-menu__item', container)
    const accoText = $('.acco-menu__text', container)
    const activeItem = items.filter('.acco-menu__item--activ')
    const activeContent = activeItem.find('.acco-menu__body')
    const content = item.find('.acco-menu__body')
    const reqWidth = calculateWidth()

    items.removeClass('acco-menu__item--activ');
    item.addClass('acco-menu__item--activ');

    accoText.hide();
    activeContent.animate({ 'width': '0px' });
    //console.log(reqWidth);

    content.animate({
      'width': reqWidth + 'px'
    }, () => { accoText.fadeIn() })
  }

  const closeItem = item => {
    item.removeClass('acco-menu__item--activ');

    item.closest('.acco-menu').find('.acco-menu__text')
      .stop(true, true).fadeOut(() => {
        item.find('.acco-menu__body').animate({ 'width': '0px' });
      });
  }

  $('.acco-menu__trigger').on('click', (e) => {
    //e.preventDefault();

    const $this = $(e.target)
    const item = $this.closest('.acco-menu__item')

    item.hasClass('acco-menu__item--activ')
      ? closeItem(item)
      : openItem(item)


  });

  // клик вне аккордеона
  $(document).on('click', (e) => {
    const $this = $(e.target);

    if (!$this.closest('.acco-menu').length) {
      closeItem($('.acco-menu__item'))
    }
  });
})


//Это тоже работает
/*
$(document).ready ( () => {

      $('.acco-menu__trigger').on('click', (e) => {

  $(e.currentTarget).parent('.acco-menu__item').toggleClass('acco-menu__item--activ');
  $(e.currentTarget).parent('.acco-menu__item').siblings().removeClass('acco-menu__item--activ');
  
})
})
*/


//reviews-fancybox
$(function() {

   $("[data-fancybox]").fancybox({
    transitionEffect : "slide",
    transitionDuration : 2000,
    afterClose: () => {
      console.log('РјРѕРґР°Р»РєР° Р·Р°РєСЂС‹С‚Р°');
    }
  });
  
  $('.close-fancy').on('click', e => {
    e.preventDefault()
    
    $.fancybox.close();
  })
})




  





//about-hamburger--------------------------------------------

let hamburgerMenu = document.getElementById('hamburger-menu-link');
let block = document.getElementById('about');
let buttonClose = document.getElementById('img-close');
let hiddenMenu = document.getElementById('drop-about');
let blockBody = document.getElementById('MyBody');
//let menuLink = document.getElementsByClassName('drop-link');
//console.log(menuLink);


      hamburgerMenu.addEventListener('click', function() {
      //block.style.opacity = '0';
      hiddenMenu.style.display = 'block';
      hiddenMenu.style.opacity = '1';
      blockBody.className = 'locked';
      // hiddenMenu.style.zIndex++;
      //hiddenMenu.style.position = 'fixed';
     });

			buttonClose.addEventListener('click', function() {
      //block.style.opacity = '1';
      hiddenMenu.style.display = 'none';
      hiddenMenu.style.opacity = '0';
      blockBody.className = '';
      //hiddenMenu.style.zIndex--;
      //hiddenMenu.style.position = 'absolute';
     });


      $('.drop-link').on('click', (e) => {
     //e.preventDefault();

      const $this = $(e.target);

      $(location).attr('href'); 
      hiddenMenu.style.display = 'none';
      hiddenMenu.style.opacity = '0';
      blockBody.className = '';


      //hiddenMenu.style.zIndex--;
      //hiddenMenu.style.position = 'absolute';
     });

//team-acco---------------------------------------------

$('.main-team__trigger').on('click', e => {
   
    const $this = $(e.currentTarget);
    const container = $this.closest('.main-team__acco');
    const item = $this.closest('.main-team__item');
    const items = $('.main-team__item', container);
    const content = $('.main-team__drop', item);
    const otherContent = $('.main-team__drop', container);
    const textBlock = $('.main-team__wrap', item);
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


//reviews-fancybox -----------------------------------------------------

$(function() {

   $("[data-fancybox]").fancybox({
    transitionEffect : "slide",
    transitionDuration : 2000,
    afterClose: () => {
      //console.log('РјРѕРґР°Р»РєР° Р·Р°РєСЂС‹С‚Р°');
    }
  });
  
  $('.close-fancy').on('click', e => {
    e.preventDefault()
    
    $.fancybox.close();
  })
})


// burger - slider --------------------------------------------------

  $(document).ready(function(){
   let slider = $('.slider').bxSlider();
     speed: 1000


  $('.bx-next').on('click' ,function(e) {
        e.preventDefault();

        slider.goToNextSlide();
    });


  $('.bx-prev').on('click' ,function(e) {
        e.preventDefault();

        slider.goToPrevSlide();
    });

    });


// FullPage  --------------------------------------------------------------

$(document).ready(function() {
  $('#fullpage').fullpage({
    menu: '#menu',
    //anchors:['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6', 'slide7', 'slide8'],
    navigation: true, 
    
 });

  $(document).on('click', '#moveDown', function(){
    $.fn.fullpage.moveSectionDown();
});

       
});


// google-map -------------------------------------------------

  function initMap() {
        var uluru = {lat: 59.934406, lng: 30.289048}; 
        var firstMapMarker = {lat: 59.955511, lng: 30.389528};
        var secondMapMarker = {lat: 59.979567, lng: 30.281725};
        var thirdMapMarker = {lat: 59.827719, lng: 30.289048};
        var fourthMapMarker = {lat: 59.893340, lng: 30.515501};        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: uluru
        });

        var marker = new google.maps.Marker({
          position: firstMapMarker,
          map: map,
          icon: "../img/__contacts/marker.png"

        });
        var marker = new google.maps.Marker({
          position: secondMapMarker,
          map: map,
          icon: "../img/__contacts/marker.png"
        });
        var marker = new google.maps.Marker({
          position: thirdMapMarker,
          map: map,
          icon: "../img/__contacts/marker.png"
        });
        var marker = new google.maps.Marker({
          position: fourthMapMarker,
          map: map,
          icon: "../img/__contacts/marker.png"
        });
      }




// slider
/*
$(function() {

  let moveSlide = function (conteiner, slideNum) {

      let          
          items = conteiner.find('.slider_item'),
          activeSlide = item.filter('.active'),
          reqItem = item.eq(slideNum),
          reqIndex = reqItem.index(),
          list = conteiner.find('.slider_list'),
          duration = 500;

    if (reqItem.length) {
       list.animate({
        'left': -reqIndex * 100 + '%'
      }, duration, function(){
          activeSlide.removeClass('active');
          reqItem.addClass('active');
        });
     }
   }

  

   $('.burgers-arrow-scroll').on('click', function(e){

      let $this = $(this),
          conteiner = $this.closest('.burger-slider'),
          item = $('.slider_item, conteiner'),
          activeItem = item.folter('.active'),
          nextItem = activeItem.next(),
          prevItem = activItim.prev();

        if ($this.hasClass('.burgers-arrow-scroll--forward')) {

               if (nextItem.length) {
                moveSlide(conteiner, nextItem.index());
              
              } else {
                moveSlide(conteiner, items.first());
                          
        } else {

                if (prevItem.length) {
                moveSlide(conteiner, prevItem.index());
              
              } else {
                moveSlide(conteiner, items.last()};
         }
          
        }
    });
  
*/

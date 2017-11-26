// OnePageScroll. Плагин fullpage.js
    $(document).ready(function() {
    $('#fullpage').fullpage({
    menu: '#menu',
    navigation: true, 
    
 });

  $(document).on('click', '#moveDown', function(){
    $.fn.fullpage.moveSectionDown();
});

       
}); 

  
//запрет или разрешение скороллинга
    var scrollControl = function(param) {
    $.fn.fullpage.setAllowScrolling(param);
    $.fn.fullpage.setKeyboardScrolling(param, 'down');
  }

    var hamburgerMenu = document.getElementById('hamburger-menu-link');
    var block = document.getElementById('about');
    var buttonClose = document.getElementById('img-close');
    var hiddenMenu = document.getElementById('drop-about');
    var blockBody = document.getElementById('MyBody');
    var menuLink = document.getElementsByClassName('drop-link');
    var $menuLink = document.getElementsByClassName('drop-link');


  
  // Меню для мобильной версии 
    var mobileMenu = function() {
    var menuControl = function(param, value) {
      $(hiddenMenu).css(param, value);
    }

    $(hamburgerMenu).click(
      function() {
        menuControl('display', 'block');
        scrollControl(false);
      });

    $(buttonClose).click(
      function() {
        menuControl('display', 'none');
        scrollControl(true);
      });

   $('[data-scroll-to]').on('click', (e) => {
      e.preventDefault()
      performTransition(parseInt($(e.target).attr('data-scroll-to'))) 
       menuControl('display', 'none');
      scrollControl(true);
      });
  }
      mobileMenu();



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


//Это тоже работает (но как-то плохо)))
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




// google-map -------------------------------------------------

  function initMap() {
        var uluru = {lat: 59.929414, lng:  30.361815}; 
        var $icon = "../img/__contacts/marker.png";
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: uluru,
          scrollwheel: false
        });

        var marker = new google.maps.Marker({
          position: {lat: 59.930874, lng: 30.364257},
          map: map,
          title: 'Невский пр., 126, Санкт-Петербург',
          icon: $icon

        });
        var marker = new google.maps.Marker({
          position: {lat: 59.902666, lng: 30.274486},
          title: 'Нарвский пр., 27, Санкт-Петербург',
          map: map,
          icon: $icon
        });
        var marker = new google.maps.Marker({
          position: {lat: 59.958178, lng: 30.345933},
          title: 'ул. Пестеля, 27, Санкт-Петербург',
          map: map,
          icon: $icon
        });
        var marker = new google.maps.Marker({
          position: {lat: 59.944844,  lng: 30.346591},
          title: 'Литейный пр., 59, Санкт-Петербург',
          map: map,
          icon: $icon
        });
      }

// form ---------------------------------------------------

// console.log('I am in common.js');
// console.log($);

var submitForm = function (ev) {
    ev.preventDefault();
    // console.log(ev);

    //var content = $('.container-form');
    var form = $(ev.target);
        
    var request = ajaxForm(form);

    request.done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        if (status === 'OK') {

          var $div = $('<div class="success"/>', {
                }).appendTo('.container-form');

            $('<a href="#close" title="Закрыть" class="close">X</a>'
, {   
                    }).appendTo($div);

            $('<p>' + mes + '</p>', {   
                   }).appendTo($div);

            $(document).on('click', '.success', function(e){
            $(e.currentTarget).css({'display' : 'none', 'cursor' : 'pointer'});

      });            

            //form.append('<p class="success">' + mes + '</p>');


        } else{

        form.append('<p class="error">' + mes + '</p>');
        
        }
    });

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}

var ajaxForm = function (form) {

    var url = form.attr('action'),
        data = form.serialize();

    return $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });

}

$('#order-form').on('submit', submitForm);
  

    









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

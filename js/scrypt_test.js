//acco
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



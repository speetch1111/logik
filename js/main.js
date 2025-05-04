function func() {

  let header_height = $('.header__wrapper').innerHeight();

  $('.header').css({
    'height': header_height,
  });

  // var windowWidth = $(window).width();
  // containerWidth = $('.container').width();
  // marginfree = (windowWidth - containerWidth) / 2 - 15;

  // if ($(window).width() > 1025) {
  //   $('.free .container').css({
  //     'margin-left': marginfree
  //   });
  // }

  // if ($(window).width() < 981) {
  //   $('.product-card__slider-wrap').insertAfter($('.product-card__name'));
  // } else {
  //   $('.product-card__slider-wrap').insertAfter($('.product-card__info'));
  // }

}

$(window).resize(func);

$(window).init(func)


$(function () {

  $('.filter__select select').styler();
  $('.sorting__select select').styler();

  $(".js-range-slider").ionRangeSlider();

  $('.clients__slider').slick({
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-arrow slick-prev"><svg><use href="#slider-arrow-simple-prev"></use></svg></button>',
    nextArrow: '<button class="slick-arrow slick-next"><svg><use href="#slider-arrow-simple-next"></use></svg></button>',
    responsive: [{
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,

        }
      },
      {
        breakpoint: 981,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  $('.product__gallery-wrap .product__gallery').slick({
    arrows: true,
    speed: 300,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-arrow slick-prev"><svg><use href="#slide-prev"></use></svg></button>',
    nextArrow: '<button class="slick-arrow slick-next"><svg><use href="#slide-prev"></use></svg></button>',
  });

  $('.product__gallery-wrap .product__gallery-nav').slick({
    arrows: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.product__gallery-wrap .product__gallery',
  });

  $('.product-card__descr .product__gallery').slick({
    arrows: true,
    speed: 300,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-arrow slick-prev"><svg><use href="#slide-prev"></use></svg></button>',
    nextArrow: '<button class="slick-arrow slick-next"><svg><use href="#slide-prev"></use></svg></button>',
  });

  $('.product-card__descr .product__gallery-nav').slick({
    arrows: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.product-card__descr .product__gallery',
  });


})

$(function () {
  func();

  Fancybox.bind();

  $(window).scroll(function () {
    var height = $(window).scrollTop();

    if (height > 0) {
      $('header').addClass('scroll');
    } else {
      $('header').removeClass('scroll');
    }

  });

  $('.form__field input,.form__field textarea').focus(function () {
    $(this).parent().addClass('focus');
  }).focusout(function () {
    if ($(this).val() == "") $(this).parent().removeClass('focus');
  })


  $('.footer__tooltip button').click(function () {
    $(this).siblings().toggleClass('active');
    $(this).parent().siblings().find('.tooltip').removeClass('active');
  });

  $('.view__btn').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.cards__grid').toggleClass('grid-row');

  });

  $('.view__btn:first-of-type').click();

  $('.filter__more').click(function () {
    $(this).toggleClass('active');
    $(this).siblings('.filter__wide').slideToggle();
  });

  $('.filter__wide').hide();

  $('.copy button').click(function() {
    const textToCopy = $(this).parent().siblings().find('input').val();
    navigator.clipboard.writeText(textToCopy)
      // .then(() => {
      //   console.log(`Copied "${textToCopy}" to clipboard`);
      // })
      // .catch((err) => {
      //   console.error('Could not copy text: ', err);
      // });
  });

  $('.card__wishlist').click(function () {
    $(this).toggleClass('active');
  });

})

$(document).mouseup(function (e) { // событие клика по веб-документу
  var div = $('.tooltip'); // тут указываем ID элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
    &&
    div.has(e.target).length === 0) { // и не по его дочерним элементам
    div.removeClass('active'); // скрываем его
    // $('.header__catalog').removeClass('open')
  }
});





// popup
;
(function () {
  window.myLib = {};

  window.myLib.body = document.querySelector('body');

  window.myLib.closestAttr = function (item, attr) {
    var node = item;

    while (node) {
      var attrValue = node.getAttribute(attr);
      if (attrValue) {
        return attrValue;
      }

      node = node.parentElement;
    }

    return null;
  };

  window.myLib.closestItemByClass = function (item, className) {
    var node = item;

    while (node) {
      if (node.classList.contains(className)) {
        return node;
      }

      node = node.parentElement;
    }

    return null;
  };

  window.myLib.toggleScroll = function () {
    myLib.body.classList.toggle('oh');
  };
})();

;
(function () {
  var showPopup = function (target) {
    target.classList.add('is-active');
  };

  var closePopup = function (target) {
    target.classList.remove('is-active');
  };

  myLib.body.addEventListener('click', function (e) {
    var target = e.target;
    var popupClass = myLib.closestAttr(target, 'data-popup');

    if (popupClass === null) {
      return;
    }

    e.preventDefault();
    var popup = document.querySelector('.' + popupClass);

    if (popup) {
      showPopup(popup);
      myLib.toggleScroll();
    }
  });

  myLib.body.addEventListener('click', function (e) {
    var target = e.target;

    if (target.classList.contains('popup__close') ||
      target.classList.contains('popup__inner')) {
      var popup = myLib.closestItemByClass(target, 'popup');

      closePopup(popup);
      myLib.toggleScroll();
    }
  });

  myLib.body.addEventListener('keydown', function (e) {
    if (e.keyCode !== 27) {
      return;
    }

    var popup = document.querySelector('.popup.is-active');

    if (popup) {
      closePopup(popup);
      myLib.toggleScroll();
    }
  });
})();

// popup
(function ($) {
  "use strict";

  /* =========================
     MOBILE DETECTION
  ========================= */
  var isMobile = {
    any: function () {
      return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }
  };

  /* =========================
     BACKGROUND IMAGE
  ========================= */
  function backgroundImage() {
    $('[data-background]').each(function () {
      var image = $(this).attr('data-background');
      $(this).css('background-image', 'url(' + image + ')');
    });
  }

  /* =========================
     PARALLAX (DESKTOP ONLY)
  ========================= */
  function parallax() {
    if (isMobile.any()) return;

    $('.bg--parallax').each(function () {
      var el = $(this);
      $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        el.css('background-position', '50% ' + scrolled * 0.2 + 'px');
      });
    });
  }

  /* =========================
     MOBILE MENU TOGGLE
  ========================= */
  function menuBtnToggle() {
    $('.menu-toggle').on('click', function () {
      $(this).toggleClass('active');
      $('.main-menu').slideToggle(300);
    });
  }

  /* =========================
     SUB MENU TOGGLE (MOBILE)
  ========================= */
  function subMenuToggle() {
    $('.menu-item-has-children > a').on('click', function (e) {
      if ($(window).width() < 992) {
        e.preventDefault();
        $(this).siblings('.sub-menu').slideToggle();
        $(this).parent().siblings().find('.sub-menu').slideUp();
      }
    });
  }

  /* =========================
     STICKY HEADER
  ========================= */
  function stickyHeader() {
    var header = $('.header');

    if (header.data('sticky') === true) {
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
          header.addClass('navigation--sticky');
        } else {
          header.removeClass('navigation--sticky');
        }
      });
    }
  }

  /* =========================
     OWL CAROUSEL
  ========================= */
  function owlCarouselInit() {
    $('.owl-slider').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      dots: true,
      nav: false
    });
  }

  /* =========================
     RESET MENU ON RESIZE
  ========================= */
  function resetMenuOnResize() {
    if ($(window).width() >= 992) {
      $('.main-menu').removeAttr('style');
      $('.menu-toggle').removeClass('active');
    }
  }

  /* =========================
     DOCUMENT READY
  ========================= */
  $(document).ready(function () {
    backgroundImage();
    parallax();
    menuBtnToggle();
    subMenuToggle();
    stickyHeader();
    owlCarouselInit();
  });

  /* =========================
     WINDOW RESIZE
  ========================= */
  $(window).on('resize', function () {
    resetMenuOnResize();
  });

})(jQuery);

document.querySelector('.menu-toggle').onclick = function () {
  document.querySelector('.main-menu').classList.toggle('active');
};

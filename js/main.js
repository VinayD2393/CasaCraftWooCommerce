(function ($) {
  "use strict";

  /* Mobile detection */
  var isMobile = {
    any: function () {
      return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }
  };

  /* Background image from data-background */
  function backgroundImage() {
    $('[data-background]').each(function () {
      var image = $(this).attr('data-background');
      $(this).css('background-image', 'url(' + image + ')');
    });
  }

  /* Parallax effect */
  function parallax() {
    $('.bg--parallax').each(function () {
      var el = $(this);
      if (isMobile.any()) {
        el.css('background-attachment', 'scroll');
      } else {
        $(window).on('scroll', function () {
          var scrolled = $(window).scrollTop();
          el.css('background-position', '50% ' + scrolled * 0.2 + 'px');
        });
      }
    });
  }

  /* Mobile menu toggle */
  function menuBtnToggle() {
    $('.menu-toggle').on('click', function () {
      $(this).toggleClass('active');
      $('.header--sidebar').toggleClass('active');
      $('.header').toggleClass('menu--active');
    });
  }

  /* Sub menu toggle */
  function subMenuToggle() {
    $('.menu-item-has-children > a').on('click', function (e) {
      e.preventDefault();
      $(this).siblings('.sub-menu').slideToggle();
      $(this).parent().siblings().find('.sub-menu').slideUp();
    });
  }

  /* Sticky header */
  function stickyHeader() {
    var header = $('.header');
    var headerTop = $('.header__top').outerHeight();

    if (header.data('sticky') === true) {
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 150) {
          header.addClass('navigation--sticky');
          header.css('margin-top', -headerTop);
        } else {
          header.removeClass('navigation--sticky');
          header.css('margin-top', 0);
        }
      });
    }
  }

  /* Owl Carousel (Hero slider) */
  function owlCarouselInit() {
    $('.owl-slider').each(function () {
      $(this).owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
        nav: false
      });
    });
  }

  /* Resize header for mobile */
  function resizeHeader() {
    if ($(window).width() < 1200) {
      $('.menu').appendTo('.header--sidebar');
    }
  }

  /* Document ready */
  $(document).ready(function () {
    backgroundImage();
    parallax();
    menuBtnToggle();
    subMenuToggle();
    stickyHeader();
    resizeHeader();
  });

  /* Window load */
  $(window).on('load', function () {
    owlCarouselInit();
    $('.ps-loading').addClass('loaded');
  });

  /* Window resize */
  $(window).on('resize', function () {
    resizeHeader();
  });

})(jQuery);

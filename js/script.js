$(document).ready(function () {
  
  $('.input-phone').mask('+7 (999) 999-99-99');

  $('.header-mobile__btn-menu').click(function(e) {
    $(this).toggleClass('header-mobile__btn-menu_active');
    $('.modal-menu').toggleClass('modal-menu_visible');
  });
  
  // $('.link').click(function () {return false;});

  $('.real-projects__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="arrow arrow-right"></div>',
    prevArrow: '<div class="arrow arrow-left"></div>'
  }); //slider real-projects
  
  $('.our-clients__logos').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<div class="arrow arrow-right"></div>',
    prevArrow: '<div class="arrow arrow-left"></div>',
    responsive: [
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }); //slider logo-clients



});
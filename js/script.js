$(document).ready(function () {
  $('.modal-menu').hide();
  
  $('.input-phone').mask('+7 (999) 999-99-99');

  // $('.header-mobile__btn-menu').click(function(e) {
  //   $(this).toggleClass('header-mobile__btn-menu_active');
  //   $('.modal-menu').toggleClass('modal-menu_visible');
  //   // $('.link').toggleClass('modal-menu_visible');
  // });

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

  $('.header__callback').click(function() {
    $('.modal-callback').addClass('modal-callback_visible');
    return false;
  });

  $('.var-maquette__button, .real-projects__slider-button').click(function() {
    $('.order-maq').addClass('order-maq_visible');
    return false;
  });
  
  
  $('.header-mobile__btn-menu').click(function() {
    $('.modal-menu').show();
  });
  // $('.header-mobile__btn-menu').click(function() {
  //   $('.modal-menu').addClass('modal-menu_visible');
  //   return false
  // });

  $('.modal__close').click(function() {
    $('.modal-callback').removeClass('modal-callback_visible');
    $('.order-maq').removeClass('order-maq_visible');
    return false;    
  }); //close modal

  $('.modal-menu__close, .modal-menu__menu a').click(function() {
    $('.modal-menu').hide();
  });


  $('.form').submit(function(event) {    
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "../Glo_Academy_diploma/mailer/PHPmailer/smart.php",
      data: $(this).serialize(), 
    }).done(function() {
      $(this).find("input").val("");
      alert("Форма отправлена. Спасибо!");
      $(".form").trigger("reset");
    });
    return false;
  });

}); //Document Ready
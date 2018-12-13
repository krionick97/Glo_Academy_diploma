$(document).ready(function () {
  
  $('.input-phone').mask('+7 (999) 99-999-99');

  $('.header-mobile__btn-menu').click(function(e) {
    $(this).toggleClass('header-mobile__btn-menu_active');
    $('.modal-menu').toggleClass('modal-menu_visible');
  });

  // $('.header-mobile__btn-menu').click(function () {
  //   $('.modal-menu').addClass('modal-menu_visible');
  // });
  // $('.header-mobile__btn-menu').click(function () {
  //   $('.modal-menu').removeClass('modal-menu_visible');
  // });

  // $('.link').click(function () {return false;});

});
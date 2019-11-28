// slider element
$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  centerMode: true,
  centerPadding: '290px',
  arrows: false,
  dots: false,
  responsive: [{
    breakpoint: 1300,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      centerMode: false,
      arrows: false,
      dots: true,
    }
  }],
});
// popup
$('.open-popup-link').magnificPopup({
  type: 'inline',
  midClick: true,
});
// popup
$('.popup-close').on('click', () => {
  $.magnificPopup.close();
});
// header fixed
$(window).scroll(function () {
  if ($(window).scrollTop() > 400) {
    $('.header--fixed').removeClass('hide');
  } else {
    $('.header--fixed').addClass('hide');
  }
});
// input mobile text hide
$('.popup input').on('focus', () => {
  $('.popup input').attr("placeholder", "").placeholder();
});
// input mobile text show
$('.popup input').on('focusout', () => {
  $('.popup input').attr("placeholder", "Номер телефона").placeholder();
});

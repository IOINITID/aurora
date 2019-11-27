// slider-two element
$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 5000,
  centerMode: true,
  centerPadding: '290px',
  arrows: false,
  dots: false,
  responsive: [{
    breakpoint: 1300,
    settings: {
      arrows: false,
      slidesToShow: 1,
      dots: true
    }
  }]
});

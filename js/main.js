let productPage = document.querySelector('.nav')
let hamburgerMenu = document.querySelector('.nav__icons')

hamburgerMenu.addEventListener('click', function () {
  productPage.classList.toggle('menu_open')
})


$(document).ready(function(){
  $('.slider').slick({
    speed: 1500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  });
});


$(document).ready(function(){
  $('.slider-disc').slick({
    speed: 1500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  });
});

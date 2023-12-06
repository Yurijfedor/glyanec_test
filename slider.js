$(document).ready(function () {
  $(".slider-advantages").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1615,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    dots: false,
    prevArrow: $(".prev-button"),
    nextArrow: $(".next-button"),
    infinite: true,
  });
});

$(document).ready(function () {
  $(".slider-clients").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1615,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    dots: false,
    prevArrow: $(".prev-clients"),
    nextArrow: $(".next-clients"),
    infinite: true,
    initialSlide: 0,
  });
});

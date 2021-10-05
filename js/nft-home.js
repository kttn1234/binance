$(document).ready(function () {
  // hover
  $('.css-glaje3').hover(function(){
    $(this).find('.Animation-bb5z2e-0').removeClass('iZCPia');
    $(this).find('.Animation-bb5z2e-0').addClass('ioSpvA');
  },function(){
    $(this).find('.Animation-bb5z2e-0').removeClass('ioSpvA');
    $(this).find('.Animation-bb5z2e-0').addClass('iZCPia');
  });
  // slick slider 
  $(".css-mwq2cu .slick-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    
  });
  $(".css-1uwfdf8 .slick-slider").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: true,
    speed: 1000,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  });
  $(".binance-carousel-vertical .slick-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    vertical: true,
    speed: 1000,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          vertical: false,
        }
      }
      
    ]
  });

  $('.css-1gojglx').click(function(){
    $('.binance-carousel-vertical .slick-slider').slick('slickPrev');
  })
  
  $('.css-o4urv0').click(function(){
    $('.binance-carousel-vertical .slick-slider').slick('slickNext');
  })

});

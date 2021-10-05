$(document).ready(function () {
  $('.css-1q2ew7e').click(function(){
    var src = $(this).find('img').attr('src');
    var newsrc = (src=='./../images/pay/icon-plus.png') ? './../images/pay/icon-minus.png' : './../images/pay/icon-plus.png';
    $(this).find('img').attr('src', newsrc );

    var classShow = $(this).parent().next().attr('class');
    var classShowName = (classShow=='css-1rgye0s') ? 'css-8eujdd' : 'css-1rgye0s';
    $(this).parent().next().attr('class', classShowName );
    
  })

   // slick slider 
  $(".css-1kzsp9x .slick-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
  });
  $(".css-ai9jsg .slick-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
  });
});

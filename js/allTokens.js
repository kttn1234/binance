$(document).ready(function () {
  // $('.css-gv1gi9').show()
  $('.css-1rfvw82').click(function(){
    $(this).next().toggle();
  });
  $('.css-ybbx55 .css-1vh3gqa').click(function(){
    $(this).parent().toggleClass('check');
    if($(this).parent().hasClass('check')) {
      $(this).next().append('<div class="css-7v8vhk"><div data-bn-type="text" class="css-1prf8we">1INCHUP/USDT</div>');
    }
    else {
      $(this).next('.css-gv1gi9').find('div').remove();
    }
  });
  $('.css-bv00nh').click(function(){
    $('.css-7pxllb').hide();
  });
  $('.css-uxs4rs .css-4cffwv').click(function(){
    $('.css-7pxllb').css("display","flex");
    $('.css-gv1gi9').hide();
  });
  $('.faq-list .question').click(function(){
    $(this).parent().toggleClass("expand");
  });
});

$(document).ready(function () {
    
  $('.css-kbv4gt').click(function(){
    $(this).parent().toggleClass('css-3prz9j-active');
    $(this).next().toggleClass('css-1yk9mh2');
    $(this).next().toggleClass('css-zmxxr7');
    if($(this).parent().hasClass('css-3prz9j-active')) {
      $( this ).find('img').replaceWith( '<img src="./images/common/icon-minus.png" alt="minus" class="css-1l0obfq">');
    }
    else {
      $( this ).find('img').replaceWith( '<img src="./images/common/icon-plus.png" alt="plus" class="css-1l0obfq">');
    }
  })
  $('.css-1ghy256').click(function(){
    $('.chat-widget').hide();
    $('.chat-container').show();
  })
  $('.chat-container').click(function(){
    $('.chat-widget').show();
    $('.chat-container').hide();
  })
  // about and community
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > $(".header").offset().top) {
      $('.css-8fjyvn').addClass('css-1jfqp2z');
    } else {
      $('.css-8fjyvn').removeClass('css-1jfqp2z');
    }
  });
  $('.css-1wde1je').click(function(){
    $('.arabic-select-lang-box').toggle();
    $('.arabic-arrow').toggle();
  })

});

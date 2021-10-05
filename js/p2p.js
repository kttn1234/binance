$(document).ready(function () {

  $('body').click(function(e){
    $('.bn-sdd-dropdown').removeClass('css-uqvjho');
    $('.bn-sdd-dropdown').addClass('css-1tsr9u1');
    $('.css-13c2b5p img').removeClass('css-1mv284k');
    $('.css-13c2b5p img').addClass('css-1nlwvj5');
    e.stopPropagation();
  })
  $('.css-2rl2kr li').click(function(e){
    $(this).attr('title');
    $(this).parents('.css-psscs0').find('.css-1h4bkt6 img').attr("src",'../images/c2c/currency-icons/'+($(this).attr('title'))+".png");
    $(this).parents('.css-psscs0').find('.css-1h4bkt6 .css-vurnku').text($(this).attr('title'));
  })
  $('.css-1f9551p').mouseover(function () {
    $(".bn-tooltip-box").css({"opacity": "1","visibility": "initial"});    
  });
  $(".css-1f9551p").mouseout(function(){
    $(".bn-tooltip-box").css({"opacity": "0","visibility": "hiddent"});    
  });
  $('.css-yxrkwa').click(function(){
    $(this).toggleClass();
    $(this).toggleClass('css-jece4e');
    $(this).prev().toggleClass('css-yxrkwa');
    $(this).prev().toggleClass('css-xbxtuo');
    
  })
  $('.css-xbxtuo').click(function(){
    $(this).toggleClass();
    $(this).toggleClass('css-xbxtuo');
    $(this).next().toggleClass('css-jece4e');
    $(this).next().toggleClass('css-yxrkwa');
  })
  $('.css-10nf7hq').click(function(){
    $(this).next().toggle();
  })
  

});


$(document).ready(function () {
  $(".css-lokgdv").click(function (e) {
    
    $(this).toggleClass("css-lokgdv");
    $(this).toggleClass("css-1uc7631");

    if ($(this).hasClass("css-1uc7631")) {
      $(this).find('img').after('<input type="search" name="q" placeholder="Search Posts" data-bn-type="input" value="" class="css-95e6op" /><img src="./../images/common/icon-clear-02.png" alt="" class="css-yeneia">')
      $(this).find(".css-95e6op").focus();
    } else {
      $(this).find(".css-95e6op").remove();
      $(this).find(".css-yeneia").remove();
    }
    e.stopPropagation();
  });
  $(".css-lokgdv .css-95e6op").change(function (e) {
    e.stopPropagation();
    $(".css-1uc7631").show();
  });
  $(".css-lokgdv .css-95e6op").click(function (e) {
    e.stopPropagation();
    $(".css-1uc7631").show();
  });

  //back-to top
  $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('.css-5vv3wk').fadeIn();
    } else {
        $('.css-5vv3wk').fadeOut();
    }
});

$(".css-5vv3wk").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
 });
});

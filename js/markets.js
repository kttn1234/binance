$(document).ready(function () {
  $(".css-11455oo").hover(
    function () {
      $(this).next().stop(true, true).slideDown("medium");
    },
    function () {}
  );

  $(".css-dy1x7o .css-gv1gi9").hover(
    function () {
      $(this).show();
    },
    function () {
      $(this).hide();
    }
  );

  $(".css-11455oo").click(function (e) {
    $(".css-dy1x7o .css-gv1gi9").toggle();
    e.stopPropagation();
  });
  $(".css-jc1ix2 button").click(function () {
    $(this).toggleClass("css-41c76l");
    $(this).toggleClass("css-4nebcp");
  });
  $("#market_filter_spot_FIAT").click(function () {
    $(".css-63thbq").toggle();
  });
  $("body").click(function (e) {
    $(".css-dy1x7o .css-gv1gi9").hide();
    e.stopPropagation();
  });

  $(".css-p19g2b").change(function () {
    $('input:checkbox').not(this).prop('checked', false);
    $(".css-dy1x7o .css-gv1gi9").show();
    var numberOfChecked = $(".css-dy1x7o input:checkbox:checked").length;
    var textCheck = $(this).parent().text().trim();
    console.log(numberOfChecked);
    if (numberOfChecked > 0) {
      $(this).parents(".css-dy1x7o").find(".css-vurnku").text(textCheck);
      $(this).parents(".css-dy1x7o").find("button").addClass("css-1cxy8l3");
    } else {
      $(this).parents(".css-dy1x7o").find(".css-vurnku").text("Tất cả margin");
      $(this).parents(".css-dy1x7o").find("button").removeClass("css-1cxy8l3");
    }
  });
  

});

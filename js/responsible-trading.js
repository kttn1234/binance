$(document).ready(function () {
  // $(".css-twucnh .css-vurnku").each(function (index) {
    //save boolean
    var pause = false;
    //save items that with number
    var item = $(".css-1xx4t7g");
    //save blocks
    var block = $(".css-2g7184");
    //variable for counter
    var k = 0;
    setInterval(function () {
      if (!pause) {
        var $this = item.eq(k - 1);
        if (item.hasClass("active")) {
          item.removeClass("active");
        }
        block.removeClass("css-9nmuyn");
        block.removeClass("css-9nmuyn").eq(k).addClass("css-9nmuyn");
        block.addClass("css-2g7184").eq(k).removeClass("css-2g7184");

        $this.addClass("active");
        k++;
        if (k >= block.length) {
          k = 0;
        }
      }
    }, 1500);
  // });

});

$(document).ready(function () {
  //save boolean
  var pause = false;
  //save items that with number
  var item=  $('.css-gmb0cy');
  //save blocks
  var block=  $('.css-vurnku');
  //variable for counter
  var k =0;
  
  
   //interval function works only when pause is false
    setInterval(function () {
        if (!pause) {
            var $this = item.eq(k-1);
          if (item.hasClass('active'))  {
            item.removeClass('active');
          };
           block.removeClass('active').eq(k).addClass('active');
            $this.addClass('active');
          //increase k every 1.5 sec
            k++;
          //if k more then number of blocks on page
            if (k >= block.length ) {
              //rewrite variable to start over
                k = 0;
            }
        }
      //every 1.5 sec
    }, 1500);


    item.hover(function () {
        var hoverItem =$(this).index();
        console.log($(this).index())
        $(this).siblings().removeClass("active");
            $(this).addClass('active');
            block.removeClass('active');
            block.eq($(this).index()+1).addClass('active');
            pause = true;
        }, function () {
            pause = false;
    });
    block.hover(function () {
        //remove active class from all except this
            $(this).siblings().removeClass("active");
           $(this).addClass('active');
          //remove active class from all
          item.removeClass('active');
         
        //add active class to item item which is accounted as index cliked item
          item.eq($(this).index()).addClass('active');
        //on hover stop interval function
            pause = true;
        }, function () {
        
        //when hover event ends, start interval function
            pause = false;
        });

});

$(document).ready(function () {
    // $('.css-1bzb8nq').show();
    // $('[data-content="css-vp41bv-02"]').show();
    // $('.css-vp41bv-02')
    $('.css-akdgyt').click(function(){
        $(this).parent().toggleClass('active');
        if($(this).parent().hasClass('active')){
            $(this).next().css({"height":"auto","overflow": "hidden"});
        }
        else {
            $(this).next().css({"height":"0"});
        }
    });
    $('.fqpGmX').hide();
    $('.css-127wd4g').click(function(){
        $(this).toggleClass('active');
        $('.fqpGmX').toggle();
        if($(this).hasClass('active')){
            $(this).find('.css-12cl38p').text("Less");
        }
        else{
            $(this).find('.css-12cl38p').text("View More");
        }
        
    })
    $('.css-d5woub').click(function(){
        $(this).toggleClass('css-d5woub');
        $(this).toggleClass('css-uumx1t');
        $(this).next().removeClass('css-d5woub');
        $(this).next().toggleClass('css-uumx1t');
        $('.css-1bzb8nq').toggle()
        $('.css-1duvvea').toggle()
    })
    $('.css-uumx1t').click(function(){
        $(this).toggleClass('css-d5woub');
        $(this).toggleClass('css-uumx1t');
        $(this).prev().removeClass('css-d5woub');
        $(this).prev().toggleClass('css-uumx1t');
        $('.css-1bzb8nq').toggle()
        $('.css-1duvvea').toggle()
    })
    // popup
    $('.css-kvf8xa').click(function(){
        $('.css-vp41bv').hide();
    })
  
    
    $('.css-1vjuluv').click(function(){
        $(this).next().toggle();
    })

  
    //tootip
    $('.css-19i9j53').hover(function(){
        $(this).prev().css({"opacity":"1","visibility":"initial","display":"block"})
    },
    function(){
        $(this).prev().css({"opacity":"0","visibility":"hidden","display":"none"})
    })
    $('.css-mf0di6').hover(function(){
        $(this).prev().css({"opacity":"1","visibility":"initial","display":"block"});
    },
    function(){
        $(this).prev().css({"opacity":"0","visibility":"hidden","display":"none"})
    })

    $('.css-1nooxx7').click(function(){
        $(this).prev().toggle().css({"opacity":"1","visibility":"initial"});
        var src = $(this).attr('src');
        var newsrc = (src=='./../images/earn/homepage/icon-info-02-off.png') ? './../images/earn/homepage/icon-info-on.png' : './../images/earn/homepage/icon-info-02-off.png';
        $(this).attr('src', newsrc );
     
    })
    
    $('.css-6qb38i').click(function(){
        $(this).parent().hide()
    })
    $('.css-odo4pv').click(function(){
        $('.css-e85uww').hide()
    })

    $('[data-tab]').hide();
    $('[data-tab=tab-01').css({"display":"block"});
    $('.tab > div').click(function(){
        $('.tab > div').addClass('css-f4gd7k');
        $('.tab > div').removeClass('css-1284lek');
        $(this).addClass('css-1284lek');
        $(this).removeClass('css-f4gd7k');
        var src = $(this).find('img').attr('src');

        var showMoreTab = $(this).attr('id');
            $('[data-tab]').hide();
            $('[data-tab="' + showMoreTab + '"]').css({"display":"block"});
        if($(this).hasClass('css-1284lek')) {
            if(src=="./../images/earn/homepage/hot-g.png" || src=="./../images/earn/homepage/hot-g-gray.svg"){
                $(this).find('img').attr('src','./../images/earn/homepage/hot-g.png');
                $(this).next().find('img').attr('src','./../images/earn/homepage/thumb-up-g-gray.png');
            }

            if(src=="./../images/earn/homepage/thumb-up-g-gray.png" || src=="./../images/earn/homepage/thumb-up-g.png"){
                $(this).prev().find('img').attr('src','./../images/earn/homepage/hot-g-gray.svg');
                $(this).find('img').attr('src','./../images/earn/homepage/thumb-up-g.png');
            }
            


            console.log(src)
            // var newsrc = (src=='./../images/earn/homepage/hot-g-gray.svg') ? './../images/earn/homepage/hot-g.png' : './../images/earn/homepage/hot-g-gray.svg';
            // $(this).attr('src', newsrc );
        }
        
        
        
    })
});

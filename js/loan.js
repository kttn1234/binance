$(document).ready(function () {
  // $('.bn-tooltip-box.css-1yof1af').css({"opacity":"1","visibility":"initial","display":"block"})
  $('.css-ig745g').hover(function(){
    $(this).next().css({"opacity":"1","visibility":"initial","display":"block"})
  },
  function(){
      $(this).next().css({"opacity":"0","visibility":"hidden","display":"none"})
  })
  $('.css-1jm49l2, .css-16hv2h7').hover(function(){
    $(this).next().css({"opacity":"1","visibility":"initial","display":"block"})
  },
  function(){
      $(this).next().css({"opacity":"0","visibility":"hidden","display":"none"})
  })

  $('.css-gvmyyf, .css-1jm49l2, .css-1jm49l2').click(function(e){
    e.stopPropagation();
    $(this).next().css({"opacity":"1","visibility":"initial","display":"block"})
  
  })

  $('.input-wrap').hover(function(){
    $(this).find('.css-7dgwu6').addClass('css-1j6j7yo');
    $(this).find('.css-1j6j7yo').removeClass('css-7dgwu6');
  },
  function(){
    $(this).find('.css-1j6j7yo').addClass('css-7dgwu6');
    $(this).find('.css-7dgwu6').removeClass('css-1j6j7yo');
  })
  // faq
  $('.css-1jf44ak').click(function(e){
    $(this).find('img').toggleClass('css-1jrd1tq');
    $(this).find('img').toggleClass('css-1kz97k3');
    $(this).next().toggleClass('css-i2b64r');
    $(this).next().toggleClass('css-1pzhmkm');
  })
  // popup 01
  $('.css-wtt72d').click(function(e){
    $('#css-vp41bv-01').toggle().css({"display":"flex"});
    e.stopPropagation();
  })
  $('.css-1xqqdcr').click(function(e){
    $('#css-vp41bv-01').hide();
    e.stopPropagation();
  })
  // $('#css-vp41bv-02').show()
  // popup 02
  $('.css-15q8bqo').click(function(e){
    $('.css-1u2nk9f').toggle().css({"display":"flex"});
    e.stopPropagation();
  })

  $('.css-1iztezc').click(function(e){
    $('.css-1u2nk9f').hide();
    e.stopPropagation();
  })
  // select coid
  $('.select').click(function(){
    $(this).toggleClass('expand');
    $(this).find('.css-1vxx1d7').toggleClass('bn-input-status-focus');
    $(this).find('ul').toggleClass('css-1ejnagb');
    $(this).find('ul').toggleClass('css-jah8ah');
    $(this).find('img').toggleClass('css-1lyytwf');
    $(this).find('img').toggleClass('css-hyoouj');
  })
  // check value 
  $('.css-1qg3tqb').blur(function(){
    if(!$(this).val()){
        console.log($(this).parents('.css-1yoi90l').find('.error-tip').length)
        if( !$(this).parents('.css-1yoi90l').find('.error-tip').length) {
          $(this).parents('.css-1yoi90l').after().append('<div class="error-tip">Số tiền tối thiểu 80 1INCH</div>');
        }
      } else{
        $(this).parents('.css-1yoi90l').after().remove();
    }
  });
  $('.css-70xvia').click(function(){
    var classShow = $(this).parent().next().attr('class');
    var classShowName = (classShow=='css-gv1gi9') ? 'css-1gai8bq' : 'css-gv1gi9';
    $(this).parent().next().attr('class', classShowName );
  })

  $('body').click(function(e){
    $('.bn-tooltip-box').hide();
    $('.css-1u2nk9f').hide();
    e.stopPropagation();
  })

});



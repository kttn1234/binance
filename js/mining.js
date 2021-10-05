$(document).ready(function () {
  $('.css-kkvevc').click(function(){
    $('.css-v48ygm').hide()
  })
  $('.css-16fg16t').click(function(e){
    e.stopPropagation();
    $(this).parent().addClass('bn-input-status-focus');
  })
  
  $('.css-1iztezc').click(function(){
    var src = $(this).attr('src');
    if(src=='./../../../../images/common/icon-sort-01.png') {
      var newsrc = (src=='./../../../../images/common/icon-sort-01.png') ? './../../../../images/common/icon-sort-02.png' : './../../../../images/common/icon-sort-01.png';
      $(this).attr('src', newsrc );
    }
    else if (src=='./../../../../images/common/icon-sort-02.png') {
      var newsrc = (src=='./../../../../images/common/icon-sort-02.png') ? './../../../../images/common/icon-sort-03.png' : './../../../../images/common/icon-sort-02.png';
      $(this).attr('src', newsrc );
    }
    else if (src=='./../../../../images/common/icon-sort-03.png') {
      var newsrc = (src=='./../../../../images/common/icon-sort-03.png') ? './../../../../images/common/icon-sort-02.png' : './../../../../images/common/icon-sort-03.png';
      $(this).attr('src', newsrc );
    }   
  })
  // show hide password
  $('.css-1344973').click(function(){
    var srcPass = $(this).find('img').attr('src');
    var newSrcPass = (srcPass=='./../../../../images/common/icon-password-on.png') ? './../../../../images/common/icon-password-off.png' : './../../../../images/common/icon-password-on.png';
    $(this).find('img').attr('src', newSrcPass );

    var textPass = $(this).find('.css-1ce0sv4').text();
    var textShowPass = (textPass=='Hiển thị') ? 'Ẩn' : 'Hiển thị';
    $(this).find('.css-1ce0sv4').text(textShowPass );
  })
  $('body').on('click', function(e){
    e.stopPropagation();
    $('.css-90w9oj').removeClass('bn-input-status-focus');
  })
});

$(document).ready(function () {
  // show hide password
  $('.button').click(function(){
    var srcPass = $(this).find('img').attr('src');
    var newSrcPass = (srcPass=='./../../../../images/common/icon-password-on.png') ? './../../../../images/common/icon-password-off.png' : './../../../../images/common/icon-password-on.png';
    $(this).find('img').attr('src', newSrcPass );

    var textPass = $(this).find('div').text();
    var textShowPass = (textPass=='Show Balance') ? 'Hide Balance' : 'Show Balance';
    $(this).find('div').text(textShowPass );
    
    $(".con-box .con-box_bottom" ).each(function( index ) {
      var textPass01 = $(this).text();
      var textShowPass01 = (textPass01=='********') ? '--<span data-v-865a8d76="">USDT</span></div>' : '********';
      $(this).html(textShowPass01 );
    });

    $(".wallet-main-list-row " ).each(function( index ) {
      var textPass02 = $(this).find('.row-1').html().trim();
      var textShowPass02 = (textPass02=='<span data-v-865a8d76="">********</span>') ? '<img data-v-865a8d76 src="./../../../../images/coin/usdt.svg" alt=""><span data-v-865a8d76="">USDT</span>' : '<span data-v-865a8d76="">********</span>';
      $(this).find('.row-1').html(textShowPass02 );

      var textPass03 = $(this).find('.row-2').html().trim();
      var textShowPass03 = (textPass03=='********') ? '--' : '********';
      $(this).find('.row-2').html(textShowPass03);

      var textPass04 = $(this).find('.row-3').html().trim();
      var textShowPass04 = (textPass04=='********') ? '--' : '********';
      $(this).find('.row-3').html(textShowPass04);

      var textPass05 = $(this).find('.row-4').html().trim();
      var textShowPass05 = (textPass05=='********') ? '--' : '********';
      $(this).find('.row-4').html(textShowPass05);

    });

    

    // $('.con-box_bottom').toggleText('********','--<span data-v-865a8d76="">USDT</span></div>');
    // $('.con-box_bottom').
  })

});

$(document).ready(function () {
  $(".css-j7ani").click(function (e) {
    e.stopPropagation();
    if( $(this).parent().find('.css-1gai8bq').length == 0) {
      $(this).after(
        '<div data-popper-reference-hidden="false" data-popper-escaped="false" data-popper-placement="left-start" class="css-1gai8bq"><div class="css-1mjc9se"><div data-bn-type="text" id="fiat_spot_wallet_buy" class="css-1lcbnex">Mua</div><div data-bn-type="text" class="css-1lcbnex">Nạp</div><div data-bn-type="text" class="css-1lcbnex">Rút</div><div data-bn-type="text" class="css-1jm49l2">Giao dịch</div><div data-bn-type="text" class="css-oqc7gy">Earn</div><div data-bn-type="text" class="css-40qabl">Chuyển đổi</div></div></div>'
      );
    }
    else {
      $(this).parent().find('.css-1gai8bq').remove();
      
    }
  });
  $(".css-o6sf7a").click(function (e) {
    // console.log($(this).find('.css-1ezbb8n').length)
    e.stopPropagation();
    $(this).find('.css-10nf7hq img').toggleClass('css-15laqez');
    $(this).find('.css-10nf7hq img').toggleClass('css-8tvvza');
    if( $(this).next('.css-1ezbb8n').length == 0) {
      $(this).after(
        '<div class="css-1ezbb8n"><div class="css-1pysja1"><div data-type="list-row" class=" css-5ry4hx"><div class="css-o6sf7a"><div data-type="list-min-row" class="css-1plnozv"><div data-bn-type="text" data-type="list-row-lf" class="css-1mmxdzv"><div class="css-1f9551p"><div data-bn-type="text" class="css-8u8dgu js-tooltip">Đang đặt lệnh</div><div class="bn-tooltip-box css-1yof1af" data-popper-reference-hidden="false" data-popper-escaped="false" data-popper-placement="top"><div class="css-1878hxt">Đã khóa: số token đã được sử dụng trong bất kỳ lệnh chưa thanh toán nào. Khi lệnh kết thúc (đã được khớp, bị hủy hoặc hết hạn), số tiền bị khóa sẽ giảm xuống.</div><div class="bn-tooltip-arrow css-1u9esp9" data-popper-arrow="true"></div><i class="gap-fill"></i></div></div></div><div data-type="list-row-rt" class="css-eow14e"><a data-bn-type="link" href="/vi/my/orders/exchange/openorder" class="css-1bg2038">********</a></div></div><div data-type="list-min-row" class="css-1plnozv"><div data-bn-type="text" data-type="list-row-lf" class="css-1mmxdzv">Tài sản khả dụng</div><div data-type="list-row-rt" class="css-eow14e">********</div></div><div data-type="list-min-row" class="css-1plnozv"><div data-bn-type="text" data-type="list-row-lf" class="css-1mmxdzv">Giá trị của BTC</div><div data-type="list-row-rt" class="css-eow14e"><div class="css-vurnku">********</div></div></div></div></div></div></div>'
      );
     
    }
    else {
      $(this).next('.css-1ezbb8n').remove();
      
    }
  });
  $('.css-1umvs28 .css-ybbx55').click(function(e){
    e.stopPropagation();
    if( $(this).find('.css-1gai8bq').length == 0) {
      $(this).find('.css-1rfvw82').after(
        '<div data-popper-reference-hidden="false" data-popper-escaped="false" data-popper-placement="left-start" class="css-1gai8bq"><div class="css-1mjc9se"><div data-bn-type="text" id="fiat_spot_wallet_buy" class="css-1lcbnex">Mua</div><div data-bn-type="text" class="css-1lcbnex">Nạp</div><div data-bn-type="text" class="css-1lcbnex">Rút</div><div data-bn-type="text" class="css-1jm49l2">Giao dịch</div><div data-bn-type="text" class="css-oqc7gy">Earn</div><div data-bn-type="text" class="css-40qabl">Chuyển đổi</div></div></div>'
      );
    }
    else {
      $(this).find('.css-1gai8bq').remove();
      
    }
  })
  $('.css-p19g2b').change(function() {
    if(this.checked) {
      console.log('check')
      $(this).parent().find('.css-1yof1af').css({"opacity":"1","visibility":"initial","display":"block"})
    }
    else {
      $(this).parent().find('.css-1yof1af').css({"opacity":"0","visibility":"hidden","display":"none"})  
    }
   
  });

  $('.css-13d0adv').click(function(){
    $('.css-n2co0p').css({"display":"flex"});
  })
  $('.css-q5xgry').click(function(){
    $('.css-n2co0p').css({"display":"none"});
  })
  $('body').click(function(e){
   $('.css-1gai8bq').hide();
   $('.css-1yof1af').css({"opacity":"0","visibility":"hidden","display":"none"})
   e.stopPropagation();
  })
});

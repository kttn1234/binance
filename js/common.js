
$(document).ready(function() {
    $(function () {
        var includes = $('[data-include]')
        $.each(includes, function () {
            var file = './../../layout/' + $(this).data('include') + '.html'
            $(this).load(file)
        })
    });
    //multi Tabs
    $('.myTabs').each(function() {
        var $myTabs = $(this);

        $myTabs.find('.css-gnqbje').hide().first().show();
        $myTabs.find('.css-1ajvsun:first').addClass('active').show();
        $myTabs.find('.css-1ajvsun').click(function() {
            var $this = $(this);
            $this.addClass('active').siblings().removeClass('active');
            $myTabs.find('.css-gnqbje').hide();
            var tabLink = $(this).attr('rel');
            $(tabLink).show();
            return false;
        });
        
        $myTabs.find('.css-im6ko3').hide().first().show();
        $myTabs.find('.css-ov54vn:first').addClass('active').show();
        $myTabs.find('.css-ov54vn').click(function() {
            var $this = $(this);
            $this.addClass('active').siblings().removeClass('active');
            $myTabs.find('.css-im6ko3').hide();
            var tabLink = $(this).attr('rel');
            $(tabLink).show();
            return false;
        });
    });
    //FAQ Toggle
    $('.slideToggle').each(function() {
        $('.btnToggle').click(function() {
            $(this).toggleClass('active');
            var tabRel = $(this).attr('rel');
            $(tabRel).slideToggle();
            $(".css-1qu0gon:visible").not(tabRel).slideToggle();
            $(".css-1qu0gon:visible").not(tabRel).prev().toggleClass('active');
        });
    });
    // 
    // select bn-input-md
    $('.css-1mxpxp, .bn-input-sm, .bn-input-md').click(function(e){
        $(this).find('.css-13c2b5p img').toggleClass('css-1mv284k');
        $(this).find('.css-13c2b5p img').toggleClass('css-1nlwvj5');
        // $(this).parent().find('.bn-sdd-dropdown').show();
        $(this).parent().find('.bn-sdd-dropdown').toggleClass('css-1tsr9u1');
        $(this).parent().find('.bn-sdd-dropdown').toggleClass('css-fxluzf');
        $(this).parent().find('.bn-sdd-dropdown .bn-input-md').toggleClass('bn-input-status-focus');
        e.stopPropagation();
    })
    $('.bn-sdd-option').click(function(e){
        $('.bn-input-md input').attr('placeholder','');
      
        if( $('.bn-sdd-value .css-10nf7hq img').length > 0) {
            $('.bn-sdd-value .css-10nf7hq img').attr('src', './../images/coin/'+$(this).text().toLowerCase().trim()+'.svg' );
        }
        else {
            $(this).parents('.css-1uhhjy7').find('.bn-sdd-value .css-10nf7hq').prepend('<img src="./../images/coin/'+$(this).text().toLowerCase().trim()+'.svg" class="css-ngs0hb">');
        }
        $(this).parents('.css-1uhhjy7').find('.bn-sdd-value .css-erx27c').text($(this).text());
    });

    $('.bn-sdd-list li').click(function(){
        var valueSelect = $(this).find('.css-1pysja1').text().trim();
        $(this).parents('.css-1tyf19').find('.bn-input-md input').val(valueSelect);
        $(this).parents('.css-1tyf19').find('.bn-sdd-dropdown').hide();
    })
    // tab login
    $('[data-login=tab-email]').css({"display":"block"});
    $('#tab-email, #tab-mobile').click(function(e){
        var showMoreId = $(this).attr('id');
        $('.css-q9sxwh').removeClass('active');
        $(this).find('.css-q9sxwh').addClass('active')
        $('[data-login]').hide();
        $('[data-login="' + showMoreId + '"]').css({"display":"block"});
        e.stopPropagation();
    })
   
    // popup input page buy-sell-crypto

    // popup 
    $('#css-vp41bv-01,#css-vp41bv-02,#css-vp41bv-03').click(function(e){
        var showMoreId = $(this).attr('id');
        $('[data-content="' + showMoreId + '"]').css({"display":"flex"});
        // focus
        $(this).find('.css-13c2b5p img').toggleClass('css-1nlwvj5');
        $(this).find('.css-13c2b5p img').toggleClass('css-1mv284k');

        $('.css-13kivwu').addClass('css-1n6nb2e');
        $('.css-1n6nb2e').removeClass('css-13kivwu')
        e.stopPropagation();
    })
    $('.popup-close').click(function(){
        $('.css-vp41bv').hide();
    })
    $('.css-vp41bv').click(function(e){
        e.stopPropagation();
    })
    // login register
    $('.css-16fg16t[name="email"]').blur(function(){
        if(!$(this).val()){
            $(this).parent().addClass('bn-input-status-error');
            $(this).parents('.css-hiy16i').next().removeClass('css-1acqidq');
            $(this).parents('.css-hiy16i').next().removeClass('help_default');
            $(this).parents('.css-hiy16i').next().addClass('css-1c3pga9');
            $(this).parents('.css-hiy16i').next().addClass('help_error');
            $(this).parents('.css-hiy16i').next().text('Hãy nhập một địa chỉ email chính xác')
            $(this).next().find('.css-1gkkq18 .icon-clear').hide();
            

        } else{
            $(this).parent().remove('bn-input-status-error');
            $(this).parents('.css-hiy16i').next().addClass('css-1acqidq');
            $(this).parents('.css-hiy16i').next().addClass('help_default');
            $(this).parents('.css-hiy16i').next().removeClass('css-1c3pga9');
            $(this).parents('.css-hiy16i').next().removeClass('help_error');
            $(this).parents('.css-hiy16i').next().text('');
            $(this).next().find('.css-1gkkq18 .icon-clear').show();
        }
    });
    $('.css-16fg16t[name="password"]').blur(function(){
        
        if(!$(this).val()){
            $(this).parents('.css-1fymml5').find('.bn-tooltip-box').show()
            $(this).parent().addClass('bn-input-status-error');
            $(this).parents('.css-hiy16i').next().removeClass('css-1acqidq');
            $(this).parents('.css-hiy16i').next().removeClass('help_default');
            $(this).parents('.css-hiy16i').next().addClass('css-1c3pga9');
            $(this).parents('.css-hiy16i').next().addClass('help_error');
            $(this).parents('.css-hiy16i').next().text('Mật khẩu phải có ít nhất 8 ký tự gồm chữ và số in hoa.')
            $(this).next().find('.css-1gkkq18 .icon-clear').hide();
            
            

        } else{
            $(this).parents('.css-1fymml5').find('.bn-tooltip-box').hide()
            $(this).parent().remove('bn-input-status-error');
            $(this).parents('.css-hiy16i').next().addClass('css-1acqidq');
            $(this).parents('.css-hiy16i').next().addClass('help_default');
            $(this).parents('.css-hiy16i').next().removeClass('css-1c3pga9');
            $(this).parents('.css-hiy16i').next().removeClass('help_error');
            $(this).parents('.css-hiy16i').next().text('');
            $(this).next().find('.css-1gkkq18 .icon-clear').show();
        }
    });

    $('.css-102t5i1').click(function(){
        $(this).next().toggleClass('hide');
        $(this).toggleClass('active');
    })
    $('.css-1ezt628').click(function(){
        var src = $(this).attr('src');
        var newsrc = (src=='./../images/common/icon-password-off.png') ? './../images/common/icon-password-on.png' : './../images/common/icon-password-off.png';
        $(this).attr('src', newsrc );
    })
    $('body').click(function(e){
        $('.bn-sdd-dropdown').removeClass('css-fxluzf');
        $('.bn-sdd-dropdown').addClass('css-1tsr9u1');
        // $('.bn-sdd-dropdown').hide()
        $('.css-vp41bv').hide();
        e.stopPropagation();
    })
    // tooltip
    $('.js-tooltip').hover(function(){
        $(this).next().css({"opacity":"1","visibility":"initial","display":"block"})
    },
    function(){
        $(this).next().css({"opacity":"0","visibility":"hidden","display":"none"})
    })
    $('body').on('click','.js-tooltip',function(e){
        e.stopPropagation();
        console.log('aaa')
        $(this).next().css({"opacity":"1","visibility":"initial","display":"block"})
    })
    // $('.js-tooltip').on('click','.css-8u8dgu',function(e){
    //     e.stopPropagation();
    //     console.log('aaa')
    //     $(this).next().css({"opacity":"1","visibility":"initial","display":"block"})
    // })
    // function(){
    //     $(this).next().toggle().css({"opacity":"0","visibility":"hidden","display":"none"})
    // })

    
});

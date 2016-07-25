
$(function(){
    /* $(window).load(function(){
     var h=window.innerHeight || document.documentElement.clientHeight;
     h= h > 620 ? h : 620 ;
     $('.nav').css({minHeight:h-60 +'px'});
     $('.content').css({minHeight:h-60 + 'px'});
     });
     $(window).resize(function(){
     var h=window.innerHeight || document.documentElement.clientHeight;
     h= h > 620 ? h : 620 ;
     $('.nav').css({minHeight:h-60 +'px'});
     $('.content').css({minHeight:h-60 + 'px'});
     });*/
    $('.menu-show').click(function(e){
        $('.customer_wrapper').toggleClass('menu-big');
        $('.nav').toggleClass('nav-big');
        $('.nav-title').toggleClass('hidden');
        $('.nav-title2').addClass('hidden');
        $('.nav-down').toggleClass('hidden');
        //$('.nav').children('ul').children('li').children('ul').addClass('hidden');
        return false;
    });

   /* $('.nav>ul>li').hover(function(){
        if($('.nav').width() == 60){
            var offset=$(this).position();
            $(this).children('ul').children('.nav-title2').removeClass('hidden');
            $(this).children('ul').css({
                position:'absolute',
                top:offset.top+30 + 'px',
                left:60+'px',
                zIndex:999
            }).removeClass('hidden');
            return false;
        }
    },function(){
        if($('.nav').width() == 60){
            $(this).children('ul').removeAttr('style').addClass('hidden');
            return false;
        }
    });*/
    $('.nav>ul>li').bind('mouseenter',function(e){
        if($('.nav').width() == 60){
            e.stopPropagation();
            $(this).children('ul').removeClass('hidden');
            $('.menu-show').trigger('click');
            //return false;
        }
    });
    $('.nav').children('ul').children('li').click(function() {
        if($('.nav').width() != 60){
            if(!$(this).children('.nav-down').attr('style')){
                $('.nav').children('ul').children('li').children('ul').addClass('hidden');
                $('.nav-down').removeAttr('style');
                $(this).children('ul').removeClass('hidden').children('.nav-title2').addClass('hidden');
                $(this).children('.nav-down').css({backgroundPosition:'-55px -310px'});
                //return false;
            }else{
                $('.nav').children('ul').children('li').children('ul').addClass('hidden');
                $(this).children('ul').addClass('hidden');
                $(this).children('.nav-down').removeAttr('style');
                //return false;
            }

        }
    });

    $('.nav-title2').nextAll('li').bind('click',function(e){
        if($('.nav').width() != 60){
            e.stopPropagation();
            $(this).parent('ul').addClass('hidden');
            $('.menu-show').trigger('click');
            //return false;
        }
    });
});
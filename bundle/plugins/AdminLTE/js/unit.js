/**
 * Created by Eric_zsp_com on 2016/7/18.
 */
$(function(){
    $('.menu-show').click(function(e){
        $('.nav').toggleClass('nav-big');
        $('.nav-title').toggleClass('hidden')
        $('.nav-down').toggleClass('hidden');
        $('.nav').children('ul').children('li').children('ul').addClass('hidden');
    });

    $('.nav>ul>li').hover(function(){
        if($('.nav').width() == 60){
            var offset=$(this).position();
            $(this).children('ul').children('.nav-title2').removeClass('hidden');
            $(this).children('ul').css({
                position:'absolute',
                top:offset.top+30 + 'px',
                left:60+'px'
            }).removeClass('hidden');

        }
    },function(){
        if($('.nav').width() == 60){
            $(this).children('ul').removeAttr('style').addClass('hidden');
        }
    });
    $('.nav').children('ul').children('li').click(function() {
        if($('.nav').width() != 60){
            if(!$(this).children('.nav-down').attr('style')){
                $(this).children('ul').toggleClass('hidden').children('.nav-title2').addClass('hidden');
                $(this).children('.nav-down').css({backgroundPosition:'-65px -47px'});
            }else{
                $(this).children('ul').toggleClass('hidden');
                $(this).children('.nav-down').removeAttr('style');
            }

        }
    });
    $('.nav-title2').nextAll('li').click(function(){
        $('.menu-show').trigger('click');
    });
});
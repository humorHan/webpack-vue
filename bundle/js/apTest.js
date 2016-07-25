webpackJsonp([0,12],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	
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

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBUZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQW9CLHFCQUFxQjtBQUN6Qyx5QkFBd0Isc0JBQXNCO0FBQzlDLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxxQkFBb0IscUJBQXFCO0FBQ3pDLHlCQUF3QixzQkFBc0I7QUFDOUMsT0FBTSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLLEVBQUU7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBbUQsa0NBQWtDO0FBQ3JGO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUMsRSIsImZpbGUiOiJhcFRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJChmdW5jdGlvbigpe1xyXG4gICAgLyogJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKXtcclxuICAgICB2YXIgaD13aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgICBoPSBoID4gNjIwID8gaCA6IDYyMCA7XHJcbiAgICAgJCgnLm5hdicpLmNzcyh7bWluSGVpZ2h0OmgtNjAgKydweCd9KTtcclxuICAgICAkKCcuY29udGVudCcpLmNzcyh7bWluSGVpZ2h0OmgtNjAgKyAncHgnfSk7XHJcbiAgICAgfSk7XHJcbiAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4gICAgIHZhciBoPXdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgIGg9IGggPiA2MjAgPyBoIDogNjIwIDtcclxuICAgICAkKCcubmF2JykuY3NzKHttaW5IZWlnaHQ6aC02MCArJ3B4J30pO1xyXG4gICAgICQoJy5jb250ZW50JykuY3NzKHttaW5IZWlnaHQ6aC02MCArICdweCd9KTtcclxuICAgICB9KTsqL1xyXG4gICAgJCgnLm1lbnUtc2hvdycpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICQoJy5jdXN0b21lcl93cmFwcGVyJykudG9nZ2xlQ2xhc3MoJ21lbnUtYmlnJyk7XHJcbiAgICAgICAgJCgnLm5hdicpLnRvZ2dsZUNsYXNzKCduYXYtYmlnJyk7XHJcbiAgICAgICAgJCgnLm5hdi10aXRsZScpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAkKCcubmF2LXRpdGxlMicpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAkKCcubmF2LWRvd24nKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgLy8kKCcubmF2JykuY2hpbGRyZW4oJ3VsJykuY2hpbGRyZW4oJ2xpJykuY2hpbGRyZW4oJ3VsJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgLyogJCgnLm5hdj51bD5saScpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoJCgnLm5hdicpLndpZHRoKCkgPT0gNjApe1xyXG4gICAgICAgICAgICB2YXIgb2Zmc2V0PSQodGhpcykucG9zaXRpb24oKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigndWwnKS5jaGlsZHJlbignLm5hdi10aXRsZTInKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJ3VsJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICB0b3A6b2Zmc2V0LnRvcCszMCArICdweCcsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OjYwKydweCcsXHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6OTk5XHJcbiAgICAgICAgICAgIH0pLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sZnVuY3Rpb24oKXtcclxuICAgICAgICBpZigkKCcubmF2Jykud2lkdGgoKSA9PSA2MCl7XHJcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJ3VsJykucmVtb3ZlQXR0cignc3R5bGUnKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTsqL1xyXG4gICAgJCgnLm5hdj51bD5saScpLmJpbmQoJ21vdXNlZW50ZXInLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGlmKCQoJy5uYXYnKS53aWR0aCgpID09IDYwKXtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigndWwnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICQoJy5tZW51LXNob3cnKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICAvL3JldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoJy5uYXYnKS5jaGlsZHJlbigndWwnKS5jaGlsZHJlbignbGknKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICBpZigkKCcubmF2Jykud2lkdGgoKSAhPSA2MCl7XHJcbiAgICAgICAgICAgIGlmKCEkKHRoaXMpLmNoaWxkcmVuKCcubmF2LWRvd24nKS5hdHRyKCdzdHlsZScpKXtcclxuICAgICAgICAgICAgICAgICQoJy5uYXYnKS5jaGlsZHJlbigndWwnKS5jaGlsZHJlbignbGknKS5jaGlsZHJlbigndWwnKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcubmF2LWRvd24nKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigndWwnKS5yZW1vdmVDbGFzcygnaGlkZGVuJykuY2hpbGRyZW4oJy5uYXYtdGl0bGUyJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLm5hdi1kb3duJykuY3NzKHtiYWNrZ3JvdW5kUG9zaXRpb246Jy01NXB4IC0zMTBweCd9KTtcclxuICAgICAgICAgICAgICAgIC8vcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICQoJy5uYXYnKS5jaGlsZHJlbigndWwnKS5jaGlsZHJlbignbGknKS5jaGlsZHJlbigndWwnKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCd1bCcpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5uYXYtZG93bicpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgICAgICAvL3JldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcubmF2LXRpdGxlMicpLm5leHRBbGwoJ2xpJykuYmluZCgnY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGlmKCQoJy5uYXYnKS53aWR0aCgpICE9IDYwKXtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ3VsJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAkKCcubWVudS1zaG93JykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgLy9yZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvanMvYXBUZXN0LmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==
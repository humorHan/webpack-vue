webpackJsonp([0,10],[
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
	        $('.nav').children('ul').children('li').children('ul').addClass('hidden');
	        return false;
	    });
	
	    $('.nav>ul>li').hover(function(){
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
	            $('.menu-show').trigger('click');
	            //return false;
	        }
	    });
	});

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLHFCQUFxQjtBQUNoRCxnQ0FBK0Isc0JBQXNCO0FBQ3JELFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIscUJBQXFCO0FBQ2hELGdDQUErQixzQkFBc0I7QUFDckQsVUFBUyxFQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW1ELGtDQUFrQztBQUNyRjtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQyxFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAvKiAkKHdpbmRvdykubG9hZChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgaD13aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgaD0gaCA+IDYyMCA/IGggOiA2MjAgO1xyXG4gICAgICAgICAgICAkKCcubmF2JykuY3NzKHttaW5IZWlnaHQ6aC02MCArJ3B4J30pO1xyXG4gICAgICAgICAgICAkKCcuY29udGVudCcpLmNzcyh7bWluSGVpZ2h0OmgtNjAgKyAncHgnfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgaD13aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgaD0gaCA+IDYyMCA/IGggOiA2MjAgO1xyXG4gICAgICAgICAgICAkKCcubmF2JykuY3NzKHttaW5IZWlnaHQ6aC02MCArJ3B4J30pO1xyXG4gICAgICAgICAgICAkKCcuY29udGVudCcpLmNzcyh7bWluSGVpZ2h0OmgtNjAgKyAncHgnfSk7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgICQoJy5tZW51LXNob3cnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAkKCcuY3VzdG9tZXJfd3JhcHBlcicpLnRvZ2dsZUNsYXNzKCdtZW51LWJpZycpO1xyXG4gICAgICAgICQoJy5uYXYnKS50b2dnbGVDbGFzcygnbmF2LWJpZycpO1xyXG4gICAgICAgICQoJy5uYXYtdGl0bGUnKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJCgnLm5hdi10aXRsZTInKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJCgnLm5hdi1kb3duJykudG9nZ2xlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICQoJy5uYXYnKS5jaGlsZHJlbigndWwnKS5jaGlsZHJlbignbGknKS5jaGlsZHJlbigndWwnKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLm5hdj51bD5saScpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoJCgnLm5hdicpLndpZHRoKCkgPT0gNjApe1xyXG4gICAgICAgICAgICB2YXIgb2Zmc2V0PSQodGhpcykucG9zaXRpb24oKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigndWwnKS5jaGlsZHJlbignLm5hdi10aXRsZTInKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJ3VsJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICB0b3A6b2Zmc2V0LnRvcCszMCArICdweCcsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OjYwKydweCcsXHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6OTk5XHJcbiAgICAgICAgICAgIH0pLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sZnVuY3Rpb24oKXtcclxuICAgICAgICBpZigkKCcubmF2Jykud2lkdGgoKSA9PSA2MCl7XHJcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJ3VsJykucmVtb3ZlQXR0cignc3R5bGUnKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoJy5uYXYnKS5jaGlsZHJlbigndWwnKS5jaGlsZHJlbignbGknKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICBpZigkKCcubmF2Jykud2lkdGgoKSAhPSA2MCl7XHJcbiAgICAgICAgICAgIGlmKCEkKHRoaXMpLmNoaWxkcmVuKCcubmF2LWRvd24nKS5hdHRyKCdzdHlsZScpKXtcclxuICAgICAgICAgICAgICAgICQoJy5uYXYnKS5jaGlsZHJlbigndWwnKS5jaGlsZHJlbignbGknKS5jaGlsZHJlbigndWwnKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcubmF2LWRvd24nKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigndWwnKS5yZW1vdmVDbGFzcygnaGlkZGVuJykuY2hpbGRyZW4oJy5uYXYtdGl0bGUyJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLm5hdi1kb3duJykuY3NzKHtiYWNrZ3JvdW5kUG9zaXRpb246Jy01NXB4IC0zMTBweCd9KTtcclxuICAgICAgICAgICAgICAgIC8vcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICQoJy5uYXYnKS5jaGlsZHJlbigndWwnKS5jaGlsZHJlbignbGknKS5jaGlsZHJlbigndWwnKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCd1bCcpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5uYXYtZG93bicpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgICAgICAvL3JldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcubmF2LXRpdGxlMicpLm5leHRBbGwoJ2xpJykuYmluZCgnY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGlmKCQoJy5uYXYnKS53aWR0aCgpICE9IDYwKXtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgJCgnLm1lbnUtc2hvdycpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIC8vcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2pzL2FwcC5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=
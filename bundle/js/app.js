webpackJsonp([1,12],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQixxQkFBcUI7QUFDaEQsZ0NBQStCLHNCQUFzQjtBQUNyRCxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLHFCQUFxQjtBQUNoRCxnQ0FBK0Isc0JBQXNCO0FBQ3JELFVBQVMsRUFBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFtRCxrQ0FBa0M7QUFDckY7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUMsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJChmdW5jdGlvbigpe1xyXG4gICAgICAgLyogJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIGg9d2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgIGg9IGggPiA2MjAgPyBoIDogNjIwIDtcclxuICAgICAgICAgICAgJCgnLm5hdicpLmNzcyh7bWluSGVpZ2h0OmgtNjAgKydweCd9KTtcclxuICAgICAgICAgICAgJCgnLmNvbnRlbnQnKS5jc3Moe21pbkhlaWdodDpoLTYwICsgJ3B4J30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIGg9d2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgIGg9IGggPiA2MjAgPyBoIDogNjIwIDtcclxuICAgICAgICAgICAgJCgnLm5hdicpLmNzcyh7bWluSGVpZ2h0OmgtNjAgKydweCd9KTtcclxuICAgICAgICAgICAgJCgnLmNvbnRlbnQnKS5jc3Moe21pbkhlaWdodDpoLTYwICsgJ3B4J30pO1xyXG4gICAgICAgIH0pOyovXHJcbiAgICAkKCcubWVudS1zaG93JykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgJCgnLmN1c3RvbWVyX3dyYXBwZXInKS50b2dnbGVDbGFzcygnbWVudS1iaWcnKTtcclxuICAgICAgICAkKCcubmF2JykudG9nZ2xlQ2xhc3MoJ25hdi1iaWcnKTtcclxuICAgICAgICAkKCcubmF2LXRpdGxlJykudG9nZ2xlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICQoJy5uYXYtdGl0bGUyJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICQoJy5uYXYtZG93bicpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAkKCcubmF2JykuY2hpbGRyZW4oJ3VsJykuY2hpbGRyZW4oJ2xpJykuY2hpbGRyZW4oJ3VsJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5uYXY+dWw+bGknKS5ob3ZlcihmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKCQoJy5uYXYnKS53aWR0aCgpID09IDYwKXtcclxuICAgICAgICAgICAgdmFyIG9mZnNldD0kKHRoaXMpLnBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJ3VsJykuY2hpbGRyZW4oJy5uYXYtdGl0bGUyJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCd1bCcpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjonYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgdG9wOm9mZnNldC50b3ArMzAgKyAncHgnLFxyXG4gICAgICAgICAgICAgICAgbGVmdDo2MCsncHgnLFxyXG4gICAgICAgICAgICAgICAgekluZGV4Ojk5OVxyXG4gICAgICAgICAgICB9KS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoJCgnLm5hdicpLndpZHRoKCkgPT0gNjApe1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCd1bCcpLnJlbW92ZUF0dHIoJ3N0eWxlJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKCcubmF2JykuY2hpbGRyZW4oJ3VsJykuY2hpbGRyZW4oJ2xpJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYoJCgnLm5hdicpLndpZHRoKCkgIT0gNjApe1xyXG4gICAgICAgICAgICBpZighJCh0aGlzKS5jaGlsZHJlbignLm5hdi1kb3duJykuYXR0cignc3R5bGUnKSl7XHJcbiAgICAgICAgICAgICAgICAkKCcubmF2JykuY2hpbGRyZW4oJ3VsJykuY2hpbGRyZW4oJ2xpJykuY2hpbGRyZW4oJ3VsJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdi1kb3duJykucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJ3VsJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpLmNoaWxkcmVuKCcubmF2LXRpdGxlMicpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5uYXYtZG93bicpLmNzcyh7YmFja2dyb3VuZFBvc2l0aW9uOictNTVweCAtMzEwcHgnfSk7XHJcbiAgICAgICAgICAgICAgICAvL3JldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAkKCcubmF2JykuY2hpbGRyZW4oJ3VsJykuY2hpbGRyZW4oJ2xpJykuY2hpbGRyZW4oJ3VsJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigndWwnKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcubmF2LWRvd24nKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgICAgICAgICAgLy9yZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLm5hdi10aXRsZTInKS5uZXh0QWxsKCdsaScpLmJpbmQoJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICBpZigkKCcubmF2Jykud2lkdGgoKSAhPSA2MCl7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICQoJy5tZW51LXNob3cnKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICAvL3JldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9qcy9hcHAuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9
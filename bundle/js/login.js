webpackJsonp([2,12],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	/**
	 * Created by Administrator on 2016/7/18.
	 */
	$(function(){
	    var userform=$(".userform");
	    var yourname=$("#name");
	    var labelname=$("#tishi");
	    var yourpsd=$("#pwd");
	    var newsname=$(".newsname");
	    var newspwd=$(".newspwd");
	    var timer=null;
	    var timerpwd=null;
	    yourname.blur(function(){
	        checkna();
	       timer= setInterval(function(){
	           clearInterval(timer);
	            newsname.hide();
	        },1000)
	    });
	    yourpsd.blur(function(){
	        checkpsd();
	        timerpwd=setInterval(function(){
	            clearInterval(timerpwd);
	            newspwd.hide();
	        },1000)
	    })
	    function checkna(){
	        na=yourname.val();
	        if(na.length==0){
	            newsname.show();
	            newsname.html('请输入用户名');
	        }
	        else if( na.length <1 || na.length >12)
	        {
	            newsname.show();
	            newsname.html("长度是1~12个字符");
	        }
	        else{
	            newsname.hide();
	        }
	    }
	    //验证密码 
	    function checkpsd(){
	        psd1=yourpsd.val();
	        var flagZM=false ;
	        var flagSZ=false ;
	        var flagQT=false ;
	        if(psd1.length==0){
	            newspwd.show();
	            newspwd.html("请输入密码")
	        }
	        else if(psd1.length<6 || psd1.length>12){
	            newspwd.show();
	            newspwd.html("长度是6~12个字符");
	        }else
	        {
	            for(i=0;i < psd1.length;i++)
	            {
	                if((psd1.charAt(i) >= 'A' && psd1.charAt(i)<='Z') || (psd1.charAt(i)>='a' && psd1.charAt(i)<='z'))
	                {
	                    flagZM=true;
	                }
	                else if(psd1.charAt(i)>='0' && psd1.charAt(i)<='9')
	                {
	                    flagSZ=true;
	                }else
	                {
	                    flagQT=true;
	                }
	            }
	            if(!flagZM||!flagSZ||flagQT){
	                newspwd.show();
	                newspwd.html("密码必须是字母数字的组合");
	
	            }else{
	                newspwd.hide();
	                //newspwd.html("输入正确");
	            }
	        }
	    }
	})

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EscUJBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxDIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE2LzcvMTguXHJcbiAqL1xyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgdXNlcmZvcm09JChcIi51c2VyZm9ybVwiKTtcclxuICAgIHZhciB5b3VybmFtZT0kKFwiI25hbWVcIik7XHJcbiAgICB2YXIgbGFiZWxuYW1lPSQoXCIjdGlzaGlcIik7XHJcbiAgICB2YXIgeW91cnBzZD0kKFwiI3B3ZFwiKTtcclxuICAgIHZhciBuZXdzbmFtZT0kKFwiLm5ld3NuYW1lXCIpO1xyXG4gICAgdmFyIG5ld3Nwd2Q9JChcIi5uZXdzcHdkXCIpO1xyXG4gICAgdmFyIHRpbWVyPW51bGw7XHJcbiAgICB2YXIgdGltZXJwd2Q9bnVsbDtcclxuICAgIHlvdXJuYW1lLmJsdXIoZnVuY3Rpb24oKXtcclxuICAgICAgICBjaGVja25hKCk7XHJcbiAgICAgICB0aW1lcj0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgICAgICAgbmV3c25hbWUuaGlkZSgpO1xyXG4gICAgICAgIH0sMTAwMClcclxuICAgIH0pO1xyXG4gICAgeW91cnBzZC5ibHVyKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2hlY2twc2QoKTtcclxuICAgICAgICB0aW1lcnB3ZD1zZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVycHdkKTtcclxuICAgICAgICAgICAgbmV3c3B3ZC5oaWRlKCk7XHJcbiAgICAgICAgfSwxMDAwKVxyXG4gICAgfSlcclxuICAgIGZ1bmN0aW9uIGNoZWNrbmEoKXtcclxuICAgICAgICBuYT15b3VybmFtZS52YWwoKTtcclxuICAgICAgICBpZihuYS5sZW5ndGg9PTApe1xyXG4gICAgICAgICAgICBuZXdzbmFtZS5zaG93KCk7XHJcbiAgICAgICAgICAgIG5ld3NuYW1lLmh0bWwoJ+ivt+i+k+WFpeeUqOaIt+WQjScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKCBuYS5sZW5ndGggPDEgfHwgbmEubGVuZ3RoID4xMilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ld3NuYW1lLnNob3coKTtcclxuICAgICAgICAgICAgbmV3c25hbWUuaHRtbChcIumVv+W6puaYrzF+MTLkuKrlrZfnrKZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIG5ld3NuYW1lLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+mqjOivgeWvhueggcKgXHJcbiAgICBmdW5jdGlvbsKgY2hlY2twc2QoKXtcclxuICAgICAgICBwc2QxPXlvdXJwc2QudmFsKCk7XHJcbiAgICAgICAgdmFywqBmbGFnWk09ZmFsc2XCoDtcclxuICAgICAgICB2YXLCoGZsYWdTWj1mYWxzZcKgO1xyXG4gICAgICAgIHZhcsKgZmxhZ1FUPWZhbHNlwqA7XHJcbiAgICAgICAgaWYocHNkMS5sZW5ndGg9PTApe1xyXG4gICAgICAgICAgICBuZXdzcHdkLnNob3coKTtcclxuICAgICAgICAgICAgbmV3c3B3ZC5odG1sKFwi6K+36L6T5YWl5a+G56CBXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYocHNkMS5sZW5ndGg8NsKgfHzCoHBzZDEubGVuZ3RoPjEyKXtcclxuICAgICAgICAgICAgbmV3c3B3ZC5zaG93KCk7XHJcbiAgICAgICAgICAgIG5ld3Nwd2QuaHRtbChcIumVv+W6puaYrzZ+MTLkuKrlrZfnrKZcIik7XHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcihpPTA7acKgPMKgcHNkMS5sZW5ndGg7aSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZigocHNkMS5jaGFyQXQoaSnCoD49wqAnQSfCoCYmwqBwc2QxLmNoYXJBdChpKTw9J1onKcKgfHzCoChwc2QxLmNoYXJBdChpKT49J2EnwqAmJsKgcHNkMS5jaGFyQXQoaSk8PSd6JykpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZ1pNPXRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlwqBpZihwc2QxLmNoYXJBdChpKT49JzAnwqAmJsKgcHNkMS5jaGFyQXQoaSk8PSc5JylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGFnU1o9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZ1FUPXRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIWZsYWdaTXx8IWZsYWdTWnx8ZmxhZ1FUKXtcclxuICAgICAgICAgICAgICAgIG5ld3Nwd2Quc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgbmV3c3B3ZC5odG1sKFwi5a+G56CB5b+F6aG75piv5a2X5q+N5pWw5a2X55qE57uE5ZCIXCIpO1xyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBuZXdzcHdkLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIC8vbmV3c3B3ZC5odG1sKFwi6L6T5YWl5q2j56GuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvanMvbG9naW4uanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9
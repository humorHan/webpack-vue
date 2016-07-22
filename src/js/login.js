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
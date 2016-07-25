
<template >
    <div class="paperManage">
        <tophead :modlename="one" :pagename="two"  :pageurl="three" ></tophead>
        <form class="form">
            <div class="overflow formhead">
                <span>科目</span>
                <select class="selectSub ">
                    <option>语文</option>
                </select>
                <a href="javascript:void(0)" class="lookbtn" >获取试题</a>
            </div>
            <ul class="usernews">
                <li><i>试题：</i><span></span></li>
                <li><i>科目：</i><span></span></li>
                <li><i>年级：</i><span></span></li>
                <li><i>状态：</i><span></span></li>
                <li><i>一审意见：</i><span></span></li>
                <li><i>二审意见：</i><span></span></li>
                <li><i>所属试卷：</i><span></span></li>
                <li> <i  class="looktest">查看试卷</i></li>
            </ul>
            <ul class="testbody">
                <li>
                    <i class="i_btm">原题</i>
                    <div>内容占位</div>
                </li>
                <li>
                    <i class="i_btm">属性</i>
                    <div>内容占位</div>
                </li>
                <li>
                    <i class="i_btm">题文</i>
                    <div>内容占位</div>
                </li>
                <li>
                    <i class="i_btm">选项</i>
                    <div>内容占位</div>
                </li>
                <li>
                    <i class="i_btm">解析</i>
                    <div>内容占位</div>
                </li>
                <li>
                    <i class="i_btm">点评</i>
                    <div>内容占位</div>
                </li>
                <li>
                    <p class="submitp"><span class="pass">通过</span>  <span class="back">退回</span></p>
                    <i class="i_btm">原因</i>
                    <div class="comment">内容占位</div>
                </li>
            </ul>
        </form>
     </div>
</template>
<script>
    var head=require("common/ContentHeader.vue");
    require("../../../bundle/css/paperManage.css");
    module.exports={
        template: '.paperManage',
        components:{
            tophead:head
        },
        data:function(){
            return{
                one:"试题管理",
                two:"试题一审",
                three:"#/paperManage"
            }
        }
    }
</script>


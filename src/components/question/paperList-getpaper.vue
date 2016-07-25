<template>
    <div class="paperList-getpaper">
        <tophead :modlename="one" :pagename="two"  :pageurl="three" ></tophead>
        <!--{{subjectId}}-->
        <div class="box1">
            <p class="show">
                <button class="btn btn-primary active" type="button" style="margin:10px auto;display:block;float:left;margin-right:10px;">查看原试卷信息</button>
                <button class="btn btn-primary active" id="show" type="button" @click="shownews" style="margin:10px auto;display:block;float:left">收起信息</button>
            </p>
            <ul class="boxhead">
                <li class="left" >
                    <ul>
                        <li><span>试卷id</span><span>595630 </span></li>
                        <li><span>科目</span><span>语文 </span></li>
                        <li><span>年级</span><span>六年级 </span></li>
                        <li><span>所属试卷</span><span>江苏省南京市学大教育专修学校2012-2013六年级语文3月月考试卷</span></li>
                        <li><span>试题状态</span><span>绑定编辑 </span></li>
                        <li><span>一审不通过原因</span><span>595630 </span></li>
                        <li><span>二审不通过原因</span><span>595630 </span></li>
                    </ul>
                </li>
            </ul>
            <div>

            </div>
        </div>
    </div>
</template>

<script>
   var test=require("common/ContentHeader.vue");
   require('../../../bundle/css/paperList-getpaper.css');
   module.exports={
       template:".paperList-getpaper",
       data:function(){
           return{
               one:"试题管理",
               two:"获取试题",
               three:"#/paperList-getpaper",
               subjectId:""
           }
       },
       computed:{
            a:function(){

                return  $('.left').attr('style');
            }
       },
        components: {
            tophead:test
        },
       route: {
//           获取id号码方法
           data ({ to }) {
               document.title = 'Profile: ' + to.params.subjectId + ' | Vue.js HN Clone'
               return {
                   subjectId: to.params.subjectId,
               }
           }
       },
       methods:{
          shownews:function(e){
//              console.log(this.a);
//              var left=$(".left");
//              if(this.a == 'dispaly:block'){
//                  left.css({display:'none'});
//
//              }
//              else{
//                  alert(222);
//                  left.css({display:'block'});
//
//              }
//
//              e.currentTarget.innerHTML='展开信息';
          }
       }
    }
</script>

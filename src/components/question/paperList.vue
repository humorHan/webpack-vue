<template >
    <div class="paperList">
         <tophead :modlename="one" :pagename="two"  :pageurl="three"></tophead>
         <h5 class="headname">点击查询科目</h5>
         <ul class="paperBody">
                <li class="listone">
                    <div class="listcontent" v-for="subject in subjects">
                        <!--<a href="#/paperList-getpaper/:{{subject.id}}">  {{subject.name}}</a>-->
                        <a href="#/paperList-getpaper/{{subject.id}}">  {{subject.name}}</a>
                    </div>
                </li>
         </ul>
    </div>
</template>
<script>
    var head=require("common/ContentHeader.vue");
    require("../../../bundle/css/paperList.css");
    var resource=require("util/ResourceData.js");
    module.exports={
        template:".paperList",
        components:{
            "tophead":head
        },
        data:function(){
            return{
                one:'试题管理',
                two:"试题列表",
                three:"#/paperList",
                subjects:resource.r_subjectList
            }
        }
    }
</script>

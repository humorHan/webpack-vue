<template >
    <div class="paperList">
         <tophead :modlename="one" ></tophead>
         <!--<h1 class="header">点击查询科目</h1>-->
         <ul class="paperBody">
                <li class="listone">
                    <div>
                        <h2>历史</h2>
                        <div class="text">fdsafsa</div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </li>
                 <li class="listone">
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                 </li>
         </ul>
    </div>
</template>
<script>
    var head=require("head.vue");
    require("../../bundle/css/paperList.css");
    module.exports={
        template:".paperList",
        components:{
            tophead:head
        },
        data:function(){
           return {
               one:"试题列表"
           }
        }

    }
</script>

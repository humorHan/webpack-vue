<template id="head">
    <div>
        <p class="head"><span class="xian" >|</span> {{modlename}}</p>
    </div>
    <!--<h1>-->
        <!--{{modlename}}-->
        <!--<small>{{pagename}}</small>-->
    <!--</h1>-->
    <!--<ol class="breadcrumb">-->
        <!--<li><a href={{pageurl}}><i class="fa fa-dashboard"></i>{{modlename}} </a></li>-->
        <!--<li class="active">{{pagename}}</li>-->
    <!--</ol>-->
</template>
<style>
    .head {
        width: 100%;
        padding-left: 10px;
        background: deepskyblue;
        color: white;
        text-align: left;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
    }
    .xian {
        font-weight: bold;
        color: blue;
        margin-right: 3px;
    }
</style>
<script>
    module.exports={
        props:{
            modlename:{type:String,default:'试题列表'},

        },
        template:"#head"
    }
</script>

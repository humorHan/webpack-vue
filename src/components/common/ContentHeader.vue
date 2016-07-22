<template>
    <section class="content-header" >
        <h1>
            {{modlename}}
            <small>{{pagename}}</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href={{pageurl}}><i class="fa fa-dashboard"></i>{{modlename}} </a></li>
            <li class="active">{{pagename}}</li>
        </ol>
    </section>
</template>
<style>
    .content{
        background: #ffffff !important;
    }
  .content-header{
      padding: 15px !important;
      border-bottom: 3px solid #d2d6de;
  }
</style>
<script>
    module.exports={
        props:{
            modlename:{type:String,default:'试卷管理'},
            pagename:{type:String,default:'试卷查重'},
            pageurl:{type:String,default:'#/demo'},
        },
        components:{
        }

    }
</script>

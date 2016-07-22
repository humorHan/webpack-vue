<template id="subgradid">
    <select  v-model="subgradid" class="subgradid" v-bind:value="subgradid">
        <option  v-for="singlistdata in singlist">{{singlistdata}}</option>
    </select>
 </template>

<!-- v-的值必须是表达式不能是带解析的那种{{}}  -->
<!--请求ajax数据-->

<script>

    module.exports = {
        template: '#subgradid',
        props:['singlist'],
        data:function(){
            return {
             subgradid:this.singlist[0]
            }
        },
        methods:{
            get:function(){
                console.log(this.singlist);
                console.log(this.singlist[0]);
            }
        }
    };
</script>
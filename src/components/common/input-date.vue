<template id="inputdate">
    <div class="rrf" v-el:msg>
    <input v-model="inputdate" class="input time date" type="text" value=""/>
    <div class="my" v-on:click="get">ddd</div>
    </div>
  </template>

<!-- v-的值必须是表达式不能是带解析的那种{{}}  -->
<!--请求ajax数据-->

<script>
    require('../../../bundle/plugins/datepicker/datepicker3.css');
    require('../../../bundle/plugins/datepicker/bootstrap-datepicker.js');
    module.exports = {
        template: '#inputdate',
        data:function(){
            return {
                inputdate:''
            }
        },
        methods:{
            get:function(){
                console.log(this.$els.msg);
                console.log($(this.$els.msg));
            }
        },
       ready: function(){
            $(function () {
                $(".time").datepicker({
                    autoclose: true,
                    clearBtn: true,
                    todayBtn: "linked",
                    startView:2,
                    format: "yyyy-mm-dd"
                });
            });
        }
    };
</script>
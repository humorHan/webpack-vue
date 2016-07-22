<template id="inputdate">
    <input v-model="inputdate" class="inputdate" type="text" value=""/>
</template>

<!-- v-的值必须是表达式不能是带解析的那种{{}}  -->
<!--请求ajax数据-->

<script>
    require('../../bundle/plugins/datepicker/datepicker3.css');
    require('../../bundle/plugins/datepicker/bootstrap-datepicker.js');
    module.exports = {
        template: '#inputdate',
        data:function(){
            return {
                inputdate:''
            }
        },
        ready: function(){
            $(function () {
                $(".inputdate").datepicker({
                    autoclose: true,
                    clearBtn: true,
                    todayBtn: true,
                    startView:2,
                    format: "yyyy-mm-dd"
                });
            });
        }
    };
</script>
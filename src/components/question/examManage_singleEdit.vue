<template id="examManage_singleEdit">
    <div>
        <div class="singtitle w100">单题修改</div>
        <div class="main-click">
            <span class="recordTime">录入时间</span>
            <inputdate ></inputdate>
            <span>到</span>
            <inputdate></inputdate>
            <span>科目</span>
            <subgradid  v-bind:singlist="subjctlist"></subgradid>
            <span>年级</span>
            <subgradid  v-bind:singlist="gradlist"></subgradid>
            <button type="button" class="btn btn-block btn-primary btn-sm buttonstyle" >查询</button>
            <div class="singleEditTab">
            </div>
        </div>
    </div>
 </template>
<script>
    console.log(667)
    var inputdata = require("common/input-date.vue");
    var subgradid = require("common/subject-grade.vue");
    require("../../../bundle/css/examManage_singleEdit.css");
    var subgdata=['语文','数学','英语','物理','化学','地理','历史','政治','生物','科学','理综','文综','历史与社会','奥数'];
    var gradclass=['全部','一年级','二年级','三年级','四年级','五年级','六年级','七年级','八年级','九年级','高一','高二','高三'];
    module.exports = {
        template:'#examManage_singleEdit',
        data:function(){
            return {
                subjctlist:subgdata,
                gradlist:gradclass
            }
        },
        components:{
            "inputdate": inputdata,
            "subgradid": subgradid,
            'in':subgradid
        },
        attached: function(){
            var _this=this;
            $(function(){
                $('.buttonstyle').click(function(){
                   // console.log(_this);
                    console.log(_this.$children[0].$els.msg);
                    console.log(_this.$refs.child);
                    console.log(_this.$refs.somchild);
                    console.log(_this.$refs);
                })
            })
        }
    }



</script>

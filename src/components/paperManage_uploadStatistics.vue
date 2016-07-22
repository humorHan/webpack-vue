<template id="tpl">
    <div class="paperManage_uploadStatistics">
        <div class="crumb font16">
            <span class="glyphicon glyphicon-option-vertical">上传管理</span>
        </div>
        <div class="content">
            <div class="time">
                <div class="form-group">
                    <label>年份:</label>
                    <div class="input-group date">
                        <div class="input-group-addon">
                            <i class="fa fa-calendar fa-0.5x"></i>
                        </div>
                        <input type="text" class="form-control pull-right Wdate input" id="dateYear" />
                    </div>
                </div>
                <input v-model="bigTime" class="Wdate input mr20" type="text" id="bigTime" />
                上传时间
                <input v-model="startTime" class="Wdate input" type="text" id="startTime" />
                到
                <input v-model="endTime" class="Wdate input mr20" type="text" id="endTime" />
                审核时间
                <input v-model="sTime" class="Wdate input" type="text" id="sTime" />
                到
                <input v-model="eTime" class="Wdate input" type="text" id="eTime" />
            </div>
            <div class="second">
                状态
                <select class="status select mr20" v-model="status">
                    <option selected="">全部</option>
                    <option>待审核</option>
                </select>
                科目
                <select class="subject select mr20" v-model="subject">
                    <option selected="">语文</option>
                    <option>数学</option>
                    <option>英语</option>
                </select>
                年级
                <select class="grade select mr20" v-model="grade">
                    <option selected="">全部</option>
                    <option>一年级</option>
                    <option>二年级</option>
                    <option>三年级</option>
                </select>
                上传人
                <input type="text" class="input" v-model="person" placeholder="请输入上传人的名称">
            </div>
            <div class="area">
                地区
                <are></are>
            </div>
            <div class="paper">
                试卷类型
                <select class="mr20 select" v-model="type">
                    <option selected="">全部</option>
                    <option>期中</option>
                    <option>期末</option>
                </select>
                试卷名称
                <input class="mr20 input" placeholder="请输入要查询的试卷名称" v-model="name">
                试卷ID
                <input class="mr20 input" placeholder="请输入要查询的试卷ID" v-model="id">
                <span class="search" @click="search">查询</span>
            </div>
            <tab :table-data="tableData"></tab>
        </div>
    </div>
</template>

<!-- v-的值必须是表达式不能是带解析的那种{{}}  -->
<!--请求ajax数据-->

<script type="text/javascript">
    var area = require("./area.vue");
    var tab = require("./table.vue");
    require('../../bundle/plugins/datepicker/datepicker3.css');
    require('../../bundle/plugins/datepicker/bootstrap-datepicker.js');
    require("../../bundle/css/paperManage_uploadStatistics_css.css");

    module.exports = {
        template: '#tpl',
        props: ['nameFromIndex','flag'],
        data:function(){
            return {
                bigTime:'',
                startTime:'',
                endTime:'',
                sTime: '',
                eTime: '',
                status:'',
                subject:'',
                grade:'',
                person:'',
                type:'',
                name:'',
                id:'',
                tableData:''
            }
        },
        components:{
            "are": area,
            "tab": tab
        },
        ready:function () {
            $(function(){
                $(".Wdate").datepicker({
                    autoclose: true,
                    clearBtn: true,
                    todayBtn: true,
                    format: "yyyy-mm-dd"
                });
            })
        },
        methods: {
            search: function(){
                //带上参数
                this.tableData = [1,2,3,4,5]
            }
        }
    };
</script>
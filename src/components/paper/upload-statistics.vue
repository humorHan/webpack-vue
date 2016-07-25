<template id="tpl">
    <div class="paperManage_uploadStatistics">
        <crumb modlename="试卷管理" pagename="上传统计"></crumb>

        <div class="filter form-inline">
            <div class="time">
                <div class="form-group">
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp年份
                    <div class="input-group date ml5r15">
                        <div class="input-group-addon">
                            <i class="fa fa-calendar fa-0.5x"></i>
                        </div>
                        <input v-model="bigTime" type="text" class="input form-control pull-right Wdate date-picker"/>
                    </div>
                </div>

                <div class="form-group">
                    上传时间
                    <div class="input-group date mlr5">
                        <div class="input-group-addon">
                            <i class="fa fa-calendar fa-0.5x"></i>
                        </div>
                        <input v-model="startTime" type="text" class="form-control pull-right Wdate input date-picker"/>
                    </div>
                </div>
                <div class="form-group">
                    到
                    <div class="input-group date ml5r15">
                        <div class="input-group-addon">
                            <i class="fa fa-calendar fa-0.5x"></i>
                        </div>
                        <input v-model="endTime" type="text" class="form-control pull-right Wdate input date-picker"/>
                    </div>
                </div>

                <div class="form-group">
                    审核时间
                    <div class="input-group date mlr5">
                        <div class="input-group-addon">
                            <i class="fa fa-calendar fa-0.5x"></i>
                        </div>
                        <input v-model="sTime" type="text" class="form-control pull-right Wdate input date-picker"/>
                    </div>
                </div>
                <div class="form-group">
                    到
                    <div class="input-group date ml5r15">
                        <div class="input-group-addon">
                            <i class="fa fa-calendar fa-0.5x"></i>
                        </div>
                        <input v-model="eTime" type="text" class="form-control pull-right Wdate input date-picker"/>
                    </div>
                </div>
            </div>
            <div class="second">
                科目
                <select class="subject select ml5r15" v-model="subject">
                    <option selected="">语文</option>
                    <option>数学</option>
                    <option>英语</option>
                </select>
                年级
                <select class="grade select ml5r15" v-model="grade">
                    <option selected="">全部</option>
                    <option>一年级</option>
                    <option>二年级</option>
                    <option>三年级</option>
                </select>
                上传人
                <input style="width: 215px;" type="text" class="input ml5r15 f12" v-model="person" placeholder="请输入上传人的名称">

                地区
                <are></are>
            </div>
            <div class="paper">
                状态
                <select class="status select ml5r15" v-model="status">
                    <option selected="">全部</option>
                    <option>待审核</option>
                </select>
                试卷类型
                <select class="select ml5r15" v-model="type">
                    <option selected="">全部</option>
                    <option>期中</option>
                    <option>期末</option>
                </select>
                试卷名称
                <input style="width: 173px;" class="input ml5r15 f12" placeholder="请输入要查询的试卷名称" v-model="name">
                试卷ID
                <input style="width: 207px;" class="input ml5r15 f12" placeholder="请输入要查询的试卷ID" v-model="id">
                <div class="search" @click="search">
                    <span class="search-bg"></span>
                    <span>查询</span>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- v-的值必须是表达式不能是带解析的那种{{}}  -->
<!--请求ajax数据-->

<script type="text/javascript">
    var area = require("paper/area.vue");
    var crumbVue=require("common/ContentHeader.vue");
    require('../../../bundle/plugins/datepicker/datepicker3.css');
    require('../../../bundle/plugins/datepicker/bootstrap-datepicker.js');
    require("../../../bundle/css/upload-statistics.css");

    module.exports = {
        template: '#tpl',
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
                id:''
            }
        },
        components:{
            "are": area,
            "crumb": crumbVue
        },
        ready:function () {
            $(function(){
                $(".Wdate").datepicker({
                    autoclose: true,
                    clearBtn: true,
                    todayBtn: 'linked',
                    format: "yyyy-mm-dd"
                });
            })
        },
        methods: {
            search: function(){
                //带上参数
                //console.log(this.$children);
            }
        }
    };
</script>
<template id="tpl">
    <div>
        <div class="choseQuestion-tree">
            <tree :model="treeData" :root="hg"></tree>
        </div>
        <div class="choseQuestion-content">
            <div class="question-show">
                <div class="tab">
                    <div class="choseTab-one choseTab-active" @click="tabOne">
                        <p class="konwPoint-tap">字母ID</p>
                    </div>
                    <div class="choseTab-two choseTab-visited" @click="tabTwo">
                        <p>统计--选题</p>
                    </div>
                </div>
                <div class="choseTab-show">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    require('../../bundle/css/choseQuestion.css');
    var tree=require('./tree.vue');
    module.exports={
        template:'#tpl',
        data:function(){
            return {
                treeData:{}
            }
        },
        components:{
          "tree":tree
        },
        methods:{
            tabOne:function(){
                $('.choseTab-one').removeClass('choseTab-visited1').addClass('choseTab-active');
                $('.choseTab-two').removeClass('choseTab-active').addClass('choseTab-visited');
                $('.choseTab-show').html('this is first ');
            },
            tabTwo:function(){
                $('.choseTab-two').removeClass('choseTab-visited').addClass('choseTab-active');
                $('.choseTab-one').removeClass('choseTab-active').addClass('choseTab-visited1');
                $('.choseTab-show').html('this is second ');
            }
        }
    }
</script>

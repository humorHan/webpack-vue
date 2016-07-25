<template id="tpl">
    <div>
        <ul class="choseQuestion-tree">
            <tree :model="treeData" :root="treeRoot"></tree>
        </ul>
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
                    <list @child-msg="msg(e)"></list>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    require('../../../bundle/css/choseQuestion.css');
    var list=require('./choseQuestion_list.vue');
    var tree=require('./../common/tree.vue');
    module.exports={
        template:'#tpl',
        data:function(){
            return {
                treeData:{},
                treeRoot:''
            }
        },
        components:{
          "tree":tree,
           "list":list
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
            },
            'msg':function(){
                console.log('this is child-msg');
            }
        },
        events:{
            'child-msg':function(e){
                console.log(e);
            },
            'treeMessage':function(e){
                console.log(e);
            }

        },
        beforeCompile:function(){
            //请求目录结构数据解析
            this.treeData=function(){
                var item=[{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":93,"f_pointid":"0x0000","f_parent":"","f_name":"六三制小学语文","f_nameP":"六三制小学语文","f_sec":-1},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":94,"f_pointid":"0x000001","f_parent":"0x0000","f_name":"基础知识积累与运用","f_nameP":"基础知识积累与运用","f_sec":-1},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":95,"f_pointid":"0x00000101","f_parent":"0x000001","f_name":"字词","f_nameP":"字词","f_sec":0},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":96,"f_pointid":"0x0000010101","f_parent":"0x00000101","f_name":"字母","f_nameP":"字母（0/0/0）","f_sec":1},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":97,"f_pointid":"0x0000010102","f_parent":"0x00000101","f_name":"拼音","f_nameP":"拼音（0/0/0）","f_sec":2},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":98,"f_pointid":"0x0000010103","f_parent":"0x00000101","f_name":"多音字辨析","f_nameP":"多音字辨析（0/0/0）","f_sec":3},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":99,"f_pointid":"0x0000010104","f_parent":"0x00000101","f_name":"同音字辨析","f_nameP":"同音字辨析（0/0/0）","f_sec":4},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":100,"f_pointid":"0x0000010105","f_parent":"0x00000101","f_name":"汉字的结构","f_nameP":"汉字的结构（0/0/0）","f_sec":5},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":101,"f_pointid":"0x0000010106","f_parent":"0x00000101","f_name":"形近字辨析","f_nameP":"形近字辨析（0/0/0）","f_sec":6},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":102,"f_pointid":"0x0000010107","f_parent":"0x00000101","f_name":"改正错别字","f_nameP":"改正错别字（0/0/0）","f_sec":7},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":103,"f_pointid":"0x0000010108","f_parent":"0x00000101","f_name":"写字","f_nameP":"写字（0/0/0）","f_sec":8},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":104,"f_pointid":"0x0000010109","f_parent":"0x00000101","f_name":"成语","f_nameP":"成语（0/0/0）","f_sec":14},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":105,"f_pointid":"0x0000010110","f_parent":"0x00000101","f_name":"感情色彩","f_nameP":"感情色彩（0/0/0）","f_sec":15},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":106,"f_pointid":"0x0000010111","f_parent":"0x00000101","f_name":"近义词，反义词","f_nameP":"近义词，反义词（0/0/0）","f_sec":16},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":107,"f_pointid":"0x0000010112","f_parent":"0x00000101","f_name":"辨析解释词义，辨析解释字义","f_nameP":"辨析解释词义，辨析解释字义（0/0/0）","f_sec":17},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":108,"f_pointid":"0x0000010113","f_parent":"0x00000101","f_name":"词语搭配","f_nameP":"词语搭配（0/0/0）","f_sec":43},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":109,"f_pointid":"0x0000010114","f_parent":"0x00000101","f_name":"关联词语","f_nameP":"关联词语（0/0/0）","f_sec":44},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":110,"f_pointid":"0x0000010115","f_parent":"0x00000101","f_name":"词语的结构","f_nameP":"词语的结构（0/0/0）","f_sec":19},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":111,"f_pointid":"0x0000010116","f_parent":"0x00000101","f_name":"排列词序","f_nameP":"排列词序（0/0/0）","f_sec":20},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":112,"f_pointid":"0x0000010117","f_parent":"0x00000101","f_name":"组词","f_nameP":"组词（0/0/0）","f_sec":21},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":113,"f_pointid":"0x0000010118","f_parent":"0x00000101","f_name":"词性","f_nameP":"词性（0/0/0）","f_sec":38},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":114,"f_pointid":"0x0000010119","f_parent":"0x00000101","f_name":"词语的分类","f_nameP":"词语的分类（0/0/0）","f_sec":39},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":115,"f_pointid":"0x0000010120","f_parent":"0x00000101","f_name":"查字典","f_nameP":"查字典（0/0/0）","f_sec":9},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":116,"f_pointid":"0x00000102","f_parent":"0x000001","f_name":"句子","f_nameP":"句子","f_sec":0},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":117,"f_pointid":"0x0000010201","f_parent":"0x00000102","f_name":"造句","f_nameP":"造句（0/0/0）","f_sec":22},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":118,"f_pointid":"0x0000010202","f_parent":"0x00000102","f_name":"仿写句子","f_nameP":"仿写句子（0/0/0）","f_sec":23},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":119,"f_pointid":"0x0000010203","f_parent":"0x00000102","f_name":"扩写句子","f_nameP":"扩写句子（0/0/0）","f_sec":24},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":120,"f_pointid":"0x0000010204","f_parent":"0x00000102","f_name":"改写句子","f_nameP":"改写句子（0/0/0）","f_sec":25},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":121,"f_pointid":"0x0000010205","f_parent":"0x00000102","f_name":"补充句子","f_nameP":"补充句子（0/0/0）","f_sec":26},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":122,"f_pointid":"0x0000010206","f_parent":"0x00000102","f_name":"连词成句","f_nameP":"连词成句（0/0/0）","f_sec":27},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":123,"f_pointid":"0x0000010207","f_parent":"0x00000102","f_name":"缩写句子","f_nameP":"缩写句子（0/0/0）","f_sec":28},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":124,"f_pointid":"0x0000010208","f_parent":"0x00000102","f_name":"理解句子","f_nameP":"理解句子（0/0/0）","f_sec":29},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":125,"f_pointid":"0x0000010209","f_parent":"0x00000102","f_name":"排列句子顺序","f_nameP":"排列句子顺序（0/0/0）","f_sec":30},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":126,"f_pointid":"0x0000010210","f_parent":"0x00000102","f_name":"翻译句子","f_nameP":"翻译句子（0/0/0）","f_sec":31},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":127,"f_pointid":"0x0000010211","f_parent":"0x00000102","f_name":"重音","f_nameP":"重音（0/0/0）","f_sec":32},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":128,"f_pointid":"0x0000010212","f_parent":"0x00000102","f_name":"病句辨析","f_nameP":"病句辨析（0/0/0）","f_sec":33},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":129,"f_pointid":"0x0000010213","f_parent":"0x00000102","f_name":"修辞方法","f_nameP":"修辞方法（0/0/0）","f_sec":34},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":130,"f_pointid":"0x0000010214","f_parent":"0x00000102","f_name":"句式","f_nameP":"句式（0/0/0）","f_sec":35},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":131,"f_pointid":"0x0000010215","f_parent":"0x00000102","f_name":"对联","f_nameP":"对联（0/0/0）","f_sec":37},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":132,"f_pointid":"0x0000010216","f_parent":"0x00000102","f_name":"标点符号","f_nameP":"标点符号（0/0/0）","f_sec":12},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":133,"f_pointid":"0x0000010217","f_parent":"0x00000102","f_name":"语句停顿","f_nameP":"语句停顿（0/0/0）","f_sec":13},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":134,"f_pointid":"0x0000010218","f_parent":"0x00000102","f_name":"书写格式","f_nameP":"书写格式（0/0/0）","f_sec":10},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":135,"f_pointid":"0x0000010219","f_parent":"0x00000102","f_name":"说明方法","f_nameP":"说明方法（0/0/0）","f_sec":40},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":136,"f_pointid":"0x0000010220","f_parent":"0x00000102","f_name":"描写方法","f_nameP":"描写方法（0/0/0）","f_sec":41},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":137,"f_pointid":"0x0000010221","f_parent":"0x00000102","f_name":"语气","f_nameP":"语气（0/0/0）","f_sec":42},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":138,"f_pointid":"0x00000103","f_parent":"0x000001","f_name":"识记","f_nameP":"识记","f_sec":0},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":139,"f_pointid":"0x0000010301","f_parent":"0x00000103","f_name":"诗词默写","f_nameP":"诗词默写（0/0/0）","f_sec":36},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":140,"f_pointid":"0x0000010302","f_parent":"0x00000103","f_name":"文史常识","f_nameP":"文史常识（0/0/0）","f_sec":11},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":141,"f_pointid":"0x0000010303","f_parent":"0x00000103","f_name":"歇后语，谚语，俗语，名言警句，格言","f_nameP":"歇后语，谚语，俗语，名言警句，格言（0/0/0）","f_sec":18},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":142,"f_pointid":"0x0000010304","f_parent":"0x00000103","f_name":"课文理解，课文背诵","f_nameP":"课文理解，课文背诵（0/0/0）","f_sec":45},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":143,"f_pointid":"0x000002","f_parent":"0x0000","f_name":"语言表达及应用","f_nameP":"语言表达及应用","f_sec":0},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":144,"f_pointid":"0x00000201","f_parent":"0x000002","f_name":"口语交际，情景写话","f_nameP":"口语交际，情景写话（0/0/0）","f_sec":46},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":145,"f_pointid":"0x00000202","f_parent":"0x000002","f_name":"实践活动","f_nameP":"实践活动（0/0/0）","f_sec":47},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":146,"f_pointid":"0x00000203","f_parent":"0x000002","f_name":"综合读写","f_nameP":"综合读写（0/0/0）","f_sec":48},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":147,"f_pointid":"0x000003","f_parent":"0x0000","f_name":"阅读理解及鉴赏","f_nameP":"阅读理解及鉴赏","f_sec":0},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":148,"f_pointid":"0x00000301","f_parent":"0x000003","f_name":"诗词鉴赏","f_nameP":"诗词鉴赏（0/0/0）","f_sec":49},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":149,"f_pointid":"0x00000302","f_parent":"0x000003","f_name":"文言文阅读","f_nameP":"文言文阅读（0/0/0）","f_sec":50},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":150,"f_pointid":"0x00000303","f_parent":"0x000003","f_name":"现代文阅读","f_nameP":"现代文阅读（0/0/0）","f_sec":51},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":151,"f_pointid":"0x000004","f_parent":"0x0000","f_name":"写作","f_nameP":"写作","f_sec":0},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":152,"f_pointid":"0x00000401","f_parent":"0x000004","f_name":"看图写话","f_nameP":"看图写话（0/0/0）","f_sec":52},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":153,"f_pointid":"0x00000402","f_parent":"0x000004","f_name":"应用文","f_nameP":"应用文（0/0/0）","f_sec":53},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":154,"f_pointid":"0x00000403","f_parent":"0x000004","f_name":"小练笔","f_nameP":"小练笔（0/0/0）","f_sec":54},{"Num1":0,"Num2":0,"Num3":0,"f_IsLevel":false,"f_id":155,"f_pointid":"0x00000404","f_parent":"0x000004","f_name":"大作文","f_nameP":"大作文（0/0/0）","f_sec":55}];
                var obj={};
                for(var i=0;i<item.length;i++){
                    if(obj[item[i].f_parent]){
                        obj[item[i].f_parent].push(item[i]);
                    }else{
                        obj[item[i].f_parent]=[];
                        obj[item[i].f_parent].push(item[i]);
                    }
                }

                return obj ;
            }();

        }
    }
</script>

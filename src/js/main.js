var Router = require('vue-router');
var App = require('App.vue');
Vue.use(Router);
var router = new Router();

router.map({
    'demo': {
        component: function(resolve){
            require(['Demo.vue'], resolve);
        }
    },
    //试卷管理-上传统计
    'paperManage_uploadStatistics': {
        component: function(resolve){
            require(['paper/upload-statistics.vue'], resolve);
        }
    },
    'paperTypeManage': {
        component: function(resolve){
            require(['paperTypeManage.vue'], resolve);
        }
    },
    //选题打标签
    'choseQuestion':{
        component: function(resolve){
            require(['select/choseQuestion.vue'], resolve);
        }
    },
    //试题管理-试题一审
    'paperManage':{
       component: function(resolve){
           require(['question/paperManage.vue'], resolve);
       }
    },
    //试题管理-试题审核
    'paperList':{
        component:function(resolve){
           require(["question/paperList.vue"],resolve);
        }
    },
    //试题管理-单题修改
    'examManage_singleEdit':{
        component:function(resolve){
            require(["question/examManage_singleEdit.vue"],resolve);
        }
    },
    //试题管理-试题列表-试题获取
    'paperList-getpaper/:id':{
        component:function(resolve){
            require(["question/paperList-getpaper.vue"],resolve);
        }
    }
});
router.beforeEach(function () {
    window.scrollTo(0, 0)
});

router.redirect({
    '*': '/demo'
});

router.start(App, '#app');
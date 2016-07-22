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
            require(['paperManage_uploadStatistics.vue'], resolve);
        }
    },
    'paperTypeManage': {
        component: function(resolve){
            require(['paperTypeManage.vue'], resolve);
        }
    },
    'choseQuestion':{
        component: function(resolve){
            require(['choseQuestion.vue'], resolve);
        }
    },
    //试题管理-试题一审
    'paperManage':{
       component: function(resolve){
           require(['paperManage.vue'], resolve);
       }
    },
    //试题管理-试题审核
    'paperList':{
        component:function(resolve){
           require(["paperList.vue"],resolve);
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
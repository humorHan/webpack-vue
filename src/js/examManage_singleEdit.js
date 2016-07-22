 var inputdata = require("input-date.vue");
 var subgradid = require("subject-grade.vue");
 var subgdata=['语文','数学','英语','物理','化学','地理','历史','政治','生物','科学','理综','文综','历史与社会','奥数'];
 var gradclass=['全部','一年级','二年级','三年级','四年级','五年级','六年级','七年级','八年级','九年级','高一','高二'];
var index = new Vue({
    el: ".singheader",
    data:{
        subjctlist:subgdata,
        gradlist:gradclass
    },
    components:{
        "inputdate": inputdata,
        "subgradid": subgradid
    }
});

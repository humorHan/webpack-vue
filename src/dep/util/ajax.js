/**
 * Created by humorHan on 2016/6/21.
 */
var $ = require("jquery");
$.ajaxSetup({cache: false});

module.exports = function(opt){
    $.ajax({
        type: opt.type || 'get',
        url: opt.url,
        data: opt.data || {},
        dataType: 'json',
        success: function(data){
            //todo 未登录处理
            opt.success(data);
        },
        error: function(data){
            opt.error ? opt.error(data) : function(){};
        }
    })
};
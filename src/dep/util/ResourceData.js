/**
 * Created by yangjin on 2016/7/21.
 */
//下拉选单数据集
/*
 科目
 */
module.exports={
    //元素ID，要选择的科目列表 数组['01','02'...]
    r_subjectList:function (elementId,selectIdList) {
        var subjectList= [
            { id: '01', name: '语文' },
            { id: '02', name: '数学' },
            { id: '03', name: '英语' },
            { id: '04', name: '物理' },
            { id: '05', name: '化学' },
            { id: '06', name: '地理' },
            { id: '07', name: '历史' },
            { id: '08', name: '政治' },
            { id: '09', name: '生物' },
            { id: '10', name: '科学' },
            { id: '11', name: '理综' },
            { id: '12', name: '文综' },
            { id: '13', name: '历史与社会' },
            { id: '14', name: '奥数' }];
    }
}
function Resource_subStatebyid(id, idlist) {
    var Datalist = [
        { id: '01', name: '语文' },
        { id: '02', name: '数学' },
        { id: '03', name: '英语' },
        { id: '04', name: '物理' },
        { id: '05', name: '化学' },
        { id: '06', name: '地理' },
        { id: '07', name: '历史' },
        { id: '08', name: '政治' },
        { id: '09', name: '生物' },
        { id: '10', name: '科学' },
        { id: '11', name: '理综' },
        { id: '12', name: '文综' },
        { id: '13', name: '历史与社会' },
        { id: '14', name: '奥数' }];
    Addsubvalue(id, Datalist, idlist);
}
function Addsubvalue(id, Datalist, idlist) {
    var eduData = Datalist
    var dataLength = eduData.length;
    var i;
    var objOption = document.getElementById(id);
    var num=0;
    if (objOption) {
        for (i = 0; i < dataLength; i++) {
            if (idlist.indexOf(eduData[i].id) >= 0) {
                objOption.options[num] = new Option(eduData[i].name, eduData[i].id);
                num++;
            }
        }
    }
}


/*
 试卷状态
 */
function Resource_PaperState(id, sid) {
    var Datalist = [
        { id: 0, name: '上传成功' },
        { id: 1, name: '转html失败' },
        { id: 2, name: '转html成功' },
        { id: 3, name: '试卷重复' },
        { id: 4, name: '等待审核' },
        { id: 5, name: '审核未通过' },
        { id: 6, name: '审核通过' },
        { id: 7, name: '拆分失败' },
        { id: 8, name: '拆分成功' },
        { id: 9, name: '录入完成' },
        { id: 10, name: '放出失败' },
        { id: 11, name: '放出成功' }];

    AddSelectvalue(id, Datalist, sid);
}

/*
 试题状态
 */
function Resource_QuestionStates(id, sid) {
    var Datalist = [
        { id: 0, name: '拆分入库' },
        { id: 1, name: '试题去重' },
        { id: 2, name: '等待编辑' },
        { id: 3, name: '绑定编辑' },
        { id: 4, name: '等待一审' },
        { id: 5, name: '一审获取' },
        { id: 6, name: '一审退回' },
        { id: 7, name: '等待二审' },
        { id: 8, name: '二审退回' },
        { id: 9, name: '审核通过' }];

    AddSelectvalue(id, Datalist, sid);
}




var DatalistSubj = [{ id: '01', name: '语文' }, { id: '02', name: '数学' }, { id: '03', name: '英语' }, { id: '04', name: '物理' }, { id: '05', name: '化学' }, { id: '06', name: '地理' }, { id: '07', name: '历史' }, { id: '08', name: '政治' }, { id: '09', name: '生物' }, { id: '10', name: '科学' }, { id: '11', name: '理综' }, { id: '12', name: '文综' }, { id: '13', name: '历史与社会' }, {id:'14',name:'奥数'}];
//科目
//function ResourceSubj(id, sid) {
//    AddSelectvalue(id, DatalistSubj, sid);
//}

//获取科目
function ResourceGetSubjByID(id) {
    for (var i = 0; i < DatalistSubj.length; i++) {
        if (DatalistSubj[i].id == id) {
            return DatalistSubj[i].name;
        }
    }
    return id;
}


/*
 每显示数量
 */
function Resource_page(id, sid) {
    var Datalist = [{ id: 10, name: '10' }, { id: 20, name: '20' }];
    AddSelectvalue(id, Datalist, sid);
}

/*
 试题统计
 */
function Resource_Question_page(id, sid) {
    var Datalist = [{ id: 10, name: '10' }, { id: 20, name: '20' }, { id: 50, name: '50' }, { id: 100, name: '100' }, { id: 200, name: '200' }];
    AddSelectvalue(id, Datalist, sid);
}
/*
 学制填充的
 */
//function ResourceEduData(id, sid) {
//    var Datalist = [{ id: 0, name: '六三' }, { id: 1, name: '五四' }];
//    AddSelectvalue(id, Datalist, sid);
//}

/*
 年级
 */
function ResourceClass(id, sid) {
    var Datalist = [{ id: 'x', name: '小学' }, { id: 'c', name: '初中' }, { id: 'g', name: '高中' }];
    AddSelectvalue(id, Datalist, sid);
}


var DatalistGrade = [{ id: '', name: '不限年级' }, { id: 'x1', name: '一年级' }, { id: 'x2', name: '二年级' }, { id: 'x3', name: '三年级' }, { id: 'x4', name: '四年级' }, { id: 'x5', name: '五年级' }, { id: 'x6', name: '六年级' }, { id: 'c1', name: '七年级' }, { id: 'c2', name: '八年级' }, { id: 'c3', name: '九年级' }, { id: 'g1', name: '高一' }, { id: 'g2', name: '高二' }, { id: 'g3', name: '高三' }];
/*
 小年级对象 
 */
//function ResourceGradeData(id, sid) {
//    AddSelectvalue(id, DatalistGrade, sid);
//}
/*
 小年级对象 
 */
function ResourceGetGradeById(id) {
    for (var i = 0; i < DatalistGrade.length; i++) {
        if (DatalistGrade[i].id == id) {
            return DatalistGrade[i].name;
        }
    }
    return id;
}
/*
 性别 id 控件iD，sid：默认值的id 
 */
function Resource_Sex(id, sid) {
    var Datalist = [{ id: '男', name: '男' }, { id: '女', name: '女' }];
    AddSelectvalue(id, Datalist, sid);
}

////内外部用户 id 控件iD，sid：默认值的id
function Resource_type(id, sid) {
    var Datalist = [{ id: '0', name: '内部用户' }, { id: '1', name: '外部用户' }];
    AddSelectvalue(id, Datalist, sid);
}

//公共方法
//给select 对象填充数据
function AddSelectvalue(id, Datalist, sid) {
    var eduData = Datalist
    var dataLength = eduData.length;
    var i;
    var objOption = document.getElementById(id);
    if (objOption) {
        for (i = 0; i < dataLength; i++) {
            objOption.options[i] = new Option(eduData[i].name, eduData[i].id);
            if (eduData[i].id == sid) {
                objOption.options[i].selected = "selected";
            }
        }
    }
}

/*
 大年级填充对象
 */
function ResourceBGradeData(id, sid) {
    var Data = [{ id: 'x', name: '小学' }, { id: 'c', name: '初中' }, { id: 'g', name: '高中' }];
    AddSelectvalue(id, Data, sid);
}

/*
 学校级别 1.国家级 2.省级   3.地市级 4.县市级
 */
function ResourceSchoolLevel(id, sid) {
    var Data = [{ id: '0', name: '--请选择--' }, { id: '1', name: '国家级' }, { id: '2', name: '省级' }, { id: '3', name: '地市级' }, { id: '4', name: '县市级' }];
    AddSelectvalue(id, Data, sid);
}

/*
 学科 
 */
function ResourceSubject(id, sid) {
    AddSelectvalue(id, DatalistSubj, sid);
}

//试卷适用的上下学期 0 上学期 1 下学期 2 全一册
function ResourceTerm(id, sid) {
    var Data = [
        { id: '0', name: '上学期' },
        { id: '1', name: '下学期' },
        { id: '2', name: '全一册' }
    ];
    AddSelectvalue(id, Data, sid);
}
function ResourceTermpaper(id, sid) {
    var Data = [
        { id: '0', name: '上学期' },
        { id: '1', name: '下学期' }//,
        //{ id: '2', name: '全一册' }
    ];
    AddSelectvalue(id, Data, sid);
}
/// 试卷类型
function ResourcePaperType(id, sid) {
    var Data = [
        { id: '1', name: '期中' },
        { id: '2', name: '期末' },
        { id: '3', name: '模拟' },
        { id: '4', name: '同步' },
        { id: '5', name: '专项' },
        { id: '6', name: '月考' },
        { id: '7', name: '中考' },
        { id: '8', name: '竞赛' },
        { id: '9', name: '高考' },
        { id: '10', name: '小考' },
        { id: '11', name: '会考' }
    ];
    AddSelectvalue(id, Data, sid);
}

/// 试卷类型
function Resourcewl(id, sid) {
    var Data = [
        { id: '1', name: '文科' },
        { id: '0', name: '理科' },
        { id: '2', name: '不分文理科' }
    ];
    AddSelectvalue(id, Data, sid);
}

/// 试卷类型
function ResourcePFrom(id, sid) {
    var Data = [
        { id: '0', name: '内部录入' },
        { id: '1', name: '兼职录入' },
        { id: '2', name: '机构' },
        { id: '3', name: '课本' }
    ];
    AddSelectvalue(id, Data, sid);
}


function AddAllAelect(ID, value) {
    $("#" + ID + "").prepend("<option value='' selected='selected' >全部</option>");

    $("#" + ID + "").val(value);

}

/// 根据学段更新学科
function ChangeSubjectListByGrade(gradeList, subjectList) {
    var grade = $(gradeList).val();
    switch (grade) {
        case 'x':
            $(subjectList + " option[value='04']").remove();
            $(subjectList + " option[value='05']").remove();
            $(subjectList + " option[value='06']").remove();
            $(subjectList + " option[value='07']").remove();
            $(subjectList + " option[value='08']").remove();
            $(subjectList + " option[value='09']").remove();
            $(subjectList + " option[value='10']").remove();
            $(subjectList + " option[value='11']").remove();
            $(subjectList + " option[value='12']").remove();
            break;
        case 'c':
            $(subjectList + " option[value='11']").remove();
            $(subjectList + " option[value='12']").remove();
            break;
        case 'g':
            $(subjectList + " option[value='10']").remove();
            $(subjectList + " option[value='11']").remove();
            $(subjectList + " option[value='12']").remove();
            break;
        default:
            break;
    }
}

/// 试题录入方式
function ResourceQuesEntryState(id, sid) {
    var Data = [
        { id: '-1', name: '所有' },
        { id: '0', name: '老师录入' },
        { id: '1', name: '机器处理' },
        { id: '100', name: '保留老题' }
    ];
    AddSelectvalue(id, Data, sid);
}
/// 试题录入方式
function ResourcePaperEntryState(id, sid) {
    var Data = [
        { id: '-1', name: '所有' },
        { id: '0', name: '老师录入' },
        { id: '1', name: '其他' }
    ];
    AddSelectvalue(id, Data, sid);
}


$(function() {
    'use strict';
    var status1 = 1;
    var status2 = 1;
    var status3 = 1;
    var status4 = 1;
    var status5 = 1;
    var status6 = 1;
    var status7 = 1;
    var status8 = 1;
    //icons4 show × status is 1
    $(".select1").on("mouseover", function() {
        $(".city").show();
    });
    $(".select1").on("mouseleave", function() {
        $(".city").hide();
    }); //nav city
    var first = /^[\u4e00-\u9fa5]*$/; //不为数字，全文字正则
    var mi;
    $(".inp").on("blur", function() {
        mi = $(".inp").val()
        if (mi == '' || !first.test(mi)) {
            $(".name .icons4").show();
            $(".name .icons3").hide();
            status1 = 1; //×
        } else {
            $(".name .icons3").show();
            $(".name .icons4").hide();
            status1 = 0 //√
        }
    }); //小区名称 
    var address = ['弓箭坊小区', '三山街地铁站', '弓箭坊玉带园小区', '弓箭坊社区'];
    //input框的事件
    $(".inp").on("input", function() {
        //获取input框的值
        var keyword = $(".inp").val();
        //有值的时候去查找数据
        if (keyword) {
            var str;
            var arr = [];
            for (var i = 0; i < address.length; i++) {
                var objStr = address[i];
                //js原生的indexOf方法返回的都是指定的子串在另一个字符串中的位置，如果没有找不到子串，则返回 -1
                var str = objStr.indexOf(keyword);
                if (str >= 0) {
                    $(".search").show();
                    arr.push(objStr);
                }
                //给动态添加的数据绑定 鼠标移入事件 给它添加背景色
                $(".search").on('mouseover', ".save" + i, function() {
                    $(this).css({
                        "background": "#f2f2f2"
                    });
                });

                $(".search").on('mouseout', ".save" + i, function() {
                    $(this).css({
                        "background": "#fff"
                    });
                });
                //给动态添加的数据绑定 鼠标点击事件 让它写入到class为inp的input框里
                $(".search").on('click', '.save' + i, function() {
                    var text = $(this).text();
                    $('.inp').val(text);
                    $(".search").hide();
                });
                $(".search").html("");
                $.each(arr, function(a, value) {
                    $(".search").append('<div class=save' + i + '>' + value + '</div>');
                });

            }
        }
    });
    $("body").on("click", function() {
            $(".search").html("").hide();
        }) //点击空白清空
    
    $("#area,#ban").on("change", function() {
        if ($("#area").find('option:selected').text() == "区属" || $("#ban").find('option:selected').text() == "板块") {
            $(".plate .icons4").show();
            $(".plate .icons3").hide();
            status2 = 1;
        } else {
            $(".plate .icons4").hide();
            $(".plate .icons3").show();
            status2 = 0
        }
    }); //区属板块


    $("#select-con,#select-option").on("change", function() {
        if ($("#select-con").find('option:selected').text() == "选择卧室内容" || $("#select-option").find('option:selected').text() == "选择限制条件") {
            $(".function .icons4").show();
            $(".function .icons3").hide();
            status3 = 1;
        } else {
            $(".function .icons4").hide();
            $(".function .icons3").show();
            status3 = 0
        }
    }); //户型


    var rooms = /^[1-9]d*|0$/; //正整数正则
    $(".room1,.room2,.room3,.room4").on("change", function() {
        var w1 = $(".room1").val();
        var w2 = $(".room2").val();
        var w3 = $(".room3").val();
        var w4 = $(".room4").val();
        var all = w1 + w2 + w3 + w4;
        if (all == '' || !rooms.test(w1) || !rooms.test(w2) || !rooms.test(w3) || !rooms.test(w4) || all <= 0) {
            $(".house .icons4").show();
            $(".house .icons3").hide();
            status4 = 1;
        } else {
            $(".house .icons3").show();
            $(".house .icons4").hide();
            status4 = 0
        } //值可以为0 但不全为0
    }); //出租形式


    var area = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/; //不为0的小数点最多2位的正数
    var con;
    $(".inp2").on("blur", function() {
        con = $(".inp2").val()
        if (con == '' || !area.test(con)) {
            $(".house2 .icons4").show();
            $(".house2 .icons3").hide();
            status5 = 1
        } else {
            $(".house2 .icons3").show();
            $(".house2 .icons4").hide();
            status5 = 0
        }
    }); //面积


    $(".inp3").on("blur", function() {
        con = $(".inp3").val()
        if (con == '' || !area.test(con)) {
            $(".money .icons4").show();
            $(".money .icons3").hide();
            status6 = 1
        } else {
            $(".money .icons3").show();
            $(".money .icons4").hide();
            status6 = 0
        }
    }); //租金
    $('input[name="checkbox"]').on("change", function() {
        if ($('input[name="checkbox"]').is(':checked')) {
            $(".pay .icons3").show();
            $(".pay .icons4").hide();
            status7 = 0
        } else {
            $(".pay .icons4").show();
            $(".pay .icons3").hide();
            status7 = 1
        }
    });

    $(".ck5").on("change", function() {
        if ($(this).is(':checked')) {
            $(this).siblings().attr('disabled', 'disabled').removeAttr('checked');
        } else {
            $(this).siblings().removeAttr('disabled', 'disabled');
        }
    }); //付款方式


    var zz = /^1[34578]\d{9}$/; //手机正则
    var nums = null;
    var vnums = '';
    $(".inpp").on("blur", function() {
        vnums = '';
        nums = $(".inpp").val();
        if (nums == '') {
            $(".yanzheng").removeClass("h").text("手机号不能为空").show();
            $(".phone .icons3").hide();
            $(".phone .icons4").hide();
            status8 = 1
        } else if (!zz.test(nums)) {
            $(".phone .icons4").show();
            $(".yanzheng").removeClass("h").text("手机号不能为空").hide();
            $(".phone .icons3").hide();
            status8 = 1
        } else {
            $(".phone .icons3").show();
            $(".yanzheng").removeClass("h").text("手机号不能为空").hide();
            $(".phone .icons4").hide();
            status8 = 0
        }
    }); //手机号


    $("body").on("input change", function() {
        var a = $(".inp").val();
        var b = $("#area").find('option:selected').val();
        var c = $("#ban").find('option:selected').val();
        var d = $(".room1").val();
        var e = $(".room2").val();
        var f = $(".room3").val();
        var g = $(".room4").val();
        var h = $('input:radio:checked').val(); //jquery获取单选框值 
        var i = $("#select-con").find('option:selected').val();
        var j = $("#select-option").find('option:selected').val();
        var k = $(".inp2").val();
        var l = $(".inp3").val();
        var chk_value = [];
        $('input[name="checkbox"]:checked').each(function() {
            chk_value.push($(this).val());
        });
        var m = $(".inpp").val();
        //jquery获取复选框值 
        $("textarea").html(
            '*小区名称:' + a + "\n" +
            '*区属板块:' + b + c + "\n" +
            '*户型:' + d + '室' + e + '厅' + f + '卫' + g + '阳台' + "\n" +
            '*出租形式:' + h + i + j + "\n" +
            '*面积:' + k + "\n" +
            '*租金:' + l + "\n" +
            '*付款方式:' + chk_value + "\n" +
            '*手机号码:' + m
        )
    }); //textarea 汇总


    $(".file").on("click", function() {
        var file = $(".yourfile").val();
        $("img").attr('src', 'images/tourist.png')
        $(".pic-wk").show();
        $(".file").hide();
    }); //上传图片

    $(".closed").on("click", function() {
        $(".pic-wk").hide();
        $(".file").show();
    }); //点击关闭图片

    $(".submit").on("click", function() {
        if (status1 == 0 && status2 == 0 && status3 == 0 && status4 == 0 && status5 == 0 && status6 == 0 && status7 == 0 && status8 == 0) {
            location.href = "http://www.baidu.com" //all√show
        } else {
            $("u").html("您填写的信息有误")
        }
    })
})
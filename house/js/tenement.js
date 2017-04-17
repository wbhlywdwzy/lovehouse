$(function() {
    'use strict';
    $(".select1").on("mouseover", function() {
        $(".city").show();
    });
    $(".select1").on("mouseleave", function() {
        $(".city").hide();
    });//nav city
    var first = /^[\u4e00-\u9fa5]*$/;//不为数字，全文字正则
    var mi;
    $(".inp").on("blur", function() {
        mi = $(".inp").val()
        if (mi == '' || !first.test(mi)) {
            $(".name .icons4").show();
            $(".name .icons3").hide();
        } else {
            $(".name .icons3").show();
            $(".name .icons4").hide();
        }
    }); //小区名称 
    

    
    $("#area,#ban").on("change",function(){
        if($("#area").find('option:selected').text()=="区属"||$("#ban").find('option:selected').text()=="板块"){
            $(".plate .icons4").show();
            $(".plate .icons3").hide();
        }else{
             $(".plate .icons4").hide();
            $(".plate .icons3").show();
        }
    });//区属板块
        $("#select-con,#select-option").on("change",function(){
        if($("#select-con").find('option:selected').text()=="选择卧室内容"||$("#select-option").find('option:selected').text()=="选择限制条件"){
            $(".function .icons4").show();
            $(".function .icons3").hide();
        }else{
             $(".function .icons4").hide();
            $(".function .icons3").show();
        }
    });//户型
    var rooms = /^[1-9]d*|0$/;//正整数正则
    $(".room1,.room2,.room3,.room4").on("change", function() {
        var w1 = $(".room1").val();
        var w2 = $(".room2").val();
        var w3 = $(".room3").val();
        var w4 = $(".room4").val();
        var all = w1 + w2 + w3 + w4;
        if (all == '' || !rooms.test(w1) || !rooms.test(w2) || !rooms.test(w3) || !rooms.test(w4) || all <= 0) {
            $(".house .icons4").show();
            $(".house .icons3").hide();
        } else {
            $(".house .icons3").show();
            $(".house .icons4").hide();
        }//值可以为0 但不全为0
    });//出租形式
    var area = /^\+?[1-9][0-9]*$/;//不为0的正整数
    var con;
    $(".inp2").on("blur", function() {
        con = $(".inp2").val()
        if (con == '' || !area.test(con)) {
            $(".house2 .icons4").show();
            $(".house2 .icons3").hide();
        } else {
            $(".house2 .icons3").show();
            $(".house2 .icons4").hide();
        }
    });//面积
    $(".inp3").on("blur", function() {
        con = $(".inp3").val()
        if (con == '' || !area.test(con)) {
            $(".money .icons4").show();
            $(".money .icons3").hide();
        } else {
            $(".money .icons3").show();
            $(".money .icons4").hide();
        }
    });//租金
    $(".ck5").on("change",function() {
        if ($(this).is(':checked')) {
            $(this).siblings().attr('disabled', 'disabled').removeAttr('checked');
        } else {
            $(this).siblings().removeAttr('disabled', 'disabled');
        }
    });//付款方式
    $(".find").on("click",function() {
        if ($(this).html() == '地图找房↓') {
            $(this).text("收起地图找房↑");
            $(".map").css({
                "height": 300
            }).slideDown(1000);
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(118.786511, 32.029147);
    map.centerAndZoom(point, 15);
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        } else {
            $(this).text("地图找房↓");
            $(".map").slideUp(1000);
        }
    });//map

    var zz = /^1[34578]\d{9}$/;//手机正则
    var nums = null;
    var vnums = '';
    $(".inpp").on("blur", function() {
        vnums = '';
        nums = $(".inpp").val();
        if (nums == '') {
            $(".yanzheng").removeClass("h").text("手机号不能为空").show();
            $(".phone .icons3").hide();
            $(".phone .icons4").hide();
        } else if (!zz.test(nums)) {
            $(".phone .icons4").show();
            $(".yanzheng").removeClass("h").text("手机号不能为空").hide();
            $(".phone .icons3").hide();

        } else {
            $(".phone .icons3").show();
            $(".yanzheng").removeClass("h").text("手机号不能为空").hide();
            $(".phone .icons4").hide();
        }
    });//手机号
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
        var m = $(".inpp").val();
        //jquery获取复选框值 
        var chk_value = [];
        $('input[name="checkbox"]:checked').each(function() {
            chk_value.push($(this).val());
        });
        var val = a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g  + h + ' ' + i + ' ' + j + ' ' + k + ' ' + l + ' ' + m + chk_value;
        $("textarea").text(val);
    });//textarea 汇总
    $(".file").on("mouseover",function() {
        var file = $(".yourfile").val();
        $("img").attr("src", 'file');
        $(".pic-wk").show();
        $(".file").hide();
    });//上传图片
$(".closed").on("click",function(){
    $(".pic-wk").hide();
    $(".file").show();
});//点击关闭图片


})
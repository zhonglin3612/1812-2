$(function () {
    var storages = window.localStorage;
    $.ajax({
        type: "POST",
        url: "../api/shop.php",
        data: "usernameid=" + storages.username,
        success: function (msg) {
            msg = JSON.parse(msg);

            console.log(msg)
            var str = '';
            for (var i = 0; i < msg.length; i++) {
                str += `
                        <div class="content_type content_type1 content_type_zp" id='${msg[i].id}'>
                        <div class="ct1 contype1_cont1 ct_zp">
                            <div> <input type="checkbox" class="666 1111 fl" name="content-check1"
                                    checked="checked"    /> <a target="_blank"
                                    href="http://www.womai.com/Product-0-634274.htm" class="img_a"> <img
                                        src="http://pic1.womai.com/upload/601/603/606/7500/7502/634274/634274_1_pic60_8827.jpg" />
                                </a>
                                <div class="contype1_cont1_cent fl"> <a target="_blank"
                                        href="http://www.womai.com/Product-0-634274.htm" class="content1_a"
                                        title="${msg[i].标题}"> ${msg[i].标题} <span> </span> </a>
                                    <div class="sevendays-preference">
                                        <div class="clear"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="ct1 contype1_cont2"> ${msg[i].价格} </div>
                        <div class="ct1 contype1_cont3">
                            <div id="p_dec1_0" class="oper_goods reduce_g" ></div>
                            <div id="p_dec_disabled1_0" class="oper_goods reduce_g" style="display:none">
                            </div>
                            <div class="input_goods" id="input_goods_1_0_634274"> <input
                                    id="amount1_0_634274" value="${msg[i].数量}" class="item_amount" /> 
                                <div class="restr_popup">
                                    <p class="flashbuy-orderlimit">此闪购活动每单限购 <span></span>件商品</p>
                                    <p class="flashbuy-userlimit">此闪购活动每账户限购<span></span>件商品</p>
                                </div> <span class="restr_arrow"></span>
                            </div>
                            <div id="p_add1_0" class="oper_goods plus_g" ></div>
                            <div id="p_add_disabled1_0" class="oper_goods plus_g" style="display:none;">
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="ct1 contype1_cont4"> ${msg[i].重量} </div>
                        <div class="ct1 contype1_cont5"><span>${msg[i].价格*msg[i].数量}</span></div>
                        <div class="ct1 contype1_cont6"> <a href="javascript:;"  class="operation_a" name="favorite">收藏</a>
                            <div class="fath_div_1">
                             <a   href="javascript:void(0);" data-id="1" data-mid="0"
                                    data-productid="634274">删除</a> <span class="top_img"></span> </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                `;
            }
            $('.ordercont-cw-con').html(str);

            //选择商品
            var now_num = [];
            for (var i = 0; i < $('.order_contents .1111').length; i++) {
                $('.order_contents .1111').prop('checked', 'checked');
                now_num.push(i);
            }
            //已选数量
            var pice = 0;
            var num = 0;
            var kg = 0;
            for (var i = 0; i < now_num.length; i++) {
                pice += $('.content_type').eq(now_num[i]).find('.contype1_cont5 span').html() * 1;
                num += $('.content_type').eq(now_num[i]).find('.contype1_cont3 input').val() * 1;
                kg += $('.content_type').eq(now_num[i]).find('.contype1_cont4').html() * 1;
            }
            $('.ordam-total .num em').html(num);
            $('.oar_weight').html(kg);
            $('#j-totaltopay1').html(pice);
            $('.ordam-money .oar-money').eq(0).html('￥' + pice);
            $('.ordam-item1 .oar-money').html(parseInt(pice * 0.086));

            function x() {
                pice = 0;
                num = 0;
                kg = 0;
                for (var i = 0; i < now_num.length; i++) {
                    dnum = $('.content_type').eq(now_num[i]).find('.contype1_cont3 input').val() * 1
                    num += dnum;
                    pice += num * msg[now_num[i]].价格;
                    kg += num * msg[now_num[i]].重量;
                    $('.content_type').eq(now_num[i]).find('.contype1_cont5 span').html(msg[now_num[i]].价格 * dnum);
                }
                $('.ordam-total .num em').html(num);
                $('.oar_weight').html(kg);
                $('#j-totaltopay1').html(pice);
                $('.ordam-money .oar-money').eq(0).html('￥' + pice);
                $('.ordam-item1 .oar-money').html(parseInt(pice * 0.086));
            }
            $('.fath_div_1').click(function () {
                $(this).parent().parent().remove();
                var arr1 = $(this).parent().parent().remove().prop('id');
                $.ajax({
                    type: "POST",
                    url: "../api/remove.php",
                    data: {
                        arr: arr1,
                        strnum: 1
                    }
                });
            })




            $('.delete_all').on('click', function () {
                var arr1 = [];
                for (var i = now_num.length - 1; i >= 0; i--) {
                    $('.content_type1').eq(now_num[i]).remove();
                    arr1.push(msg[now_num[i]].id);
                }
                arr1 = arr1.join(",")
                console.log(arr1);
                $.ajax({
                    type: "POST",
                    url: "../api/remove.php",
                    data: {
                        arr: arr1,
                        strnum: now_num.length
                    }
                });
            })


            $('.ordercont_content').on('click', '.666', function () {
                now_num = [];
                for (var i = 0; i < $('.order_contents .1111').length; i++) {
                    if ($('.order_contents .1111').eq(i).prop('checked')) {
                        now_num.push(i);
                    }
                }
                if (now_num.length == $('.order_contents .1111').length) {
                    $('.ordercont_allcheck input').prop('checked', 'checked');
                } else {
                    $('.ordercont_allcheck input').prop('checked', false);
                }

                //-----
                x();

            })
            $('.ordercont_allcheck').click(function () {
                if ($('.ordercont_allcheck input').prop('checked')) {
                    for (var i = 0; i < $('.order_contents .1111').length; i++) {
                        $('.order_contents .1111').prop('checked', 'checked');
                        now_num.push(i);
                    }
                } else {
                    for (var i = 0; i < $('.order_contents .1111').length; i++) {
                        $('.order_contents .1111').eq(i).prop('checked', false);
                    }
                    now_num = [];
                }
                //---
                x();

            })
            //数量
            $('.contype1_cont3').on('click', '.oper_goods', function () {
                var n = $(this).parent().find('.item_amount').val()
                if ($(this).attr('class') == 'oper_goods reduce_g' && n > 1) {
                    $(this).parent().find('.item_amount').val(n * 1 - 1)
                    var newnum = $(this).parent().find('.item_amount').val();
                    //第几条数据
                    var index = $(this).parent().parent().index()
                    x();
                    $.ajax({
                        type: "POST",
                        url: "../api/add.php",
                        data: "add=" + msg[index].id + "&num=" + newnum,
                    });

                } else if ($(this).attr('class') == 'oper_goods plus_g') {
                    $(this).parent().find('.item_amount').val(n * 1 + 1)
                    var newnum = $(this).parent().find('.item_amount').val();
                    //第几条数据
                    var index = $(this).parent().parent().index()
                    x();
                    $.ajax({
                        type: "POST",
                        url: "../api/add.php",
                        data: "add=" + msg[index].id + "&num=" + newnum,
                    });
                }

            })


        } //aj函数
    });


    //登陆
    var storages = window.localStorage;
    $.ajax({
        type: "POST",
        url: "../api/regLog.php",
        data: 'username=' + storages.username + '&password=' + storages.password,
        success: function (msg) {
            msg = JSON.parse(msg);
            if (msg.password == '1') {
                $('.welcome__user-name').html(storages.username + '，您好！');
                $('.welcome__log').html('退出');
                $('.welcome__reg').css('display', 'none');
            }
        }
    });

    //退出
    $('.welcome__log').click(function () {
        if ($('.welcome__log').html() == '退出') {
            storages.username = '';
            storages.password = '';
            $('.welcome__user-name').html('hi，欢迎来我买网！');
            $('.welcome__log').html('登陆');
            $('.welcome__reg').css('display', 'block');
        } else if ($('.welcome__log').html() == '登陆') {
            $(window).attr('location', 'log.html');
        }
    })


    //删除




})
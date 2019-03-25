$(function () {

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
                //去购物车
                $('body').on('click', '.1234', function () {
                    $(window).attr('location', 'shop.html');
                })
                //添加购物车

                $('body').on('click', '#buyBtn', function () {
                    alert('物品添加成功');
                    var i = $('#amount').val();
                    $.ajax({
                        type: "POST",
                        url: "../api/up.php",
                        data: {
                            addnum: i,
                            wupingid: $(window).attr('location').search.substring(1),
                            username: storages.username
                        },
                        success: function (msg) {
                            msg = JSON.parse(msg);
                            msg = msg[0].id;
                            console.log(msg);
                            $.ajax({
                                type: "POST",
                                url: "../api/up.php",
                                data: {
                                    id: msg,
                                    addnum: i,
                                    wupingid: $(window).attr('location').search.substring(1),
                                    username: storages.username
                                },
                                success: function (response) {
                                    console.log(response);
                                    if (response) {
                                        response = JSON.parse(response);
                                        response = response[0];
                                        $.ajax({
                                            type: "POST",
                                            url: "../api/up.php",
                                            data: {
                                                id: msg,
                                                addnum: i,
                                                wupingid: $(window).attr('location').search.substring(1),
                                                username: storages.username,
                                                add: 1,
                                                x1: response.标题,
                                                x2: response.价格,
                                                x3: response.评论,
                                                x4: response.时间,
                                                x5: response.重量,
                                                x6: response.类别,
                                                x8: response.销量
                                            }
                                        });


                                    }

                                }
                            });
                        }
                    });

                })
            }
        }
    });
    //列表页
    $('body').on('click', '.nav', function () {
        $(window).attr('location', 'list.html');
    })
    //退出
    $('.welcome__log').click(function () {
        $('body').unbind()
        $('body').on('click', '.1234', function () {
            alert('请登录')
        })
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




    //搜索框
    $('#topKeywords').focus(function () {
        $('#topKeywords').css({
            color: 'rgb(195, 0, 0)'
        }).val('')
    })
    $('.search__input').focus(function () {
        $('.search__input').css({
            color: 'rgb(195, 0, 0)'
        }).val('')
    })
    // 导航栏hover
    $('.title').hover(function () {
        $(this).css('color', '#3ea600')
    }, function () {
        $(this).css('color', '#000')
    });

 //回到顶部
 $('.sidebar__item .sidebar__icon-to-top').click(function () {
    var num = 10;
    var time = setInterval(function () {
        $(document).scrollTop($(document).scrollTop() - num);
        num += num * 0.8
        if ($(document).scrollTop() <= 0) {
            clearInterval(time);
        }
    }, 30)
})

    $.ajax({
        type: "POST",
        url: "../api/info.php",
        data: 'id=' + $(window).attr('location').search.substring(1),
        success: function (msg) {
            msg = JSON.parse(msg).html[0];
            var html;
            if (1) {
                html = `
                <div class="pro_tit_top" title="${msg.标题}"> <span class="p-zy">自营</span>
                            <h1 class="p-title" title="${msg.标题}">${msg.标题}</h1>
                        </div>
                        <div class="clear"></div>
                        <div id="ruleInfo"> </div>
                        <div id="protopbillingDiv"></div>
                        <div class="price-wrap">
                            <div class="price-infor">
                                <span class="fr time" id="specialPriceTimersy"></span>
                                <span class="price" id="buyPrice"><em>￥</em>${msg.价格}</span>
                                <span class="group pro_m_tit_1">抢购价</span><a >(降价通知)</a>
                            </div>
                        </div>
                        <div class="promotions" id="loadPromotions" >
                            <div class="pro_m_line">
                                <dl>
                                    <dt>加价购</dt>
                                    <dd class="intro" title="【超值换购】购买生鲜类商品即可加价换购指定商品（部分商品除外），数量有限换完为止">
                                        <span class="title"> 【超值换购】购买生鲜类商品即可加价换... </span>
                                        <span class="borderspan" id="jiajiagou1" style="display: none;">loadding...</span>
                                    </dd>
                                    <dd class="man_detail" id="hasJiajiagou_icon_1" style="display: none;"><i class="png"></i><a onclick="InfoMousemove('hasJiajiagou',1,$(this));">详情</a></dd>
                                    <dd class="man_detail_gicon" id="hasJiajiagou_gicon_1" style="display: block;"><i class="manpng"></i><a onclick="InfoMouseout('hasJiajiagou',1,$(this));">详情</a></dd>
                                    <div class="clear"></div>
                                </dl>
                            </div>
                        </div>
                       <div id="loadRegion"><dl class="address delivery-tip"><dt>送至：</dt><input type="hidden" id="productid" value="634274"><input type="hidden" id="mid" value="0"><dd class="addr_select"><div class="text"><input type="hidden" id="option1" value=""><input type="hidden" id="option2" value=""><input type="hidden" id="option3" value=""><div class="region-text">北京海淀区海淀区5环内</div><s></s></div><div class="content" style="display: none;"><b class="close">×</b><div class="mt"><ul><li class="current show"><span id="dffirst">北京</span><s></s><i></i></li><li><span id="dfsecond">海淀区</span><s></s><i></i></li><li class="last"><span id="dfthird">海淀区5环内</span><s></s><i></i></li><div class="clear"></div></ul></div><div id="firststep" class="mc" style="display:block;"><ul><li data-regionid="31000">北京</li><li data-regionid="31019">天津</li><li data-regionid="31038">河北省</li><li data-regionid="31063">山西省</li><li data-regionid="31077">内蒙古自治区</li><li data-regionid="31100">辽宁省</li><li data-regionid="31119">吉林省</li><li data-regionid="31132">黑龙江省</li><li data-regionid="31154">上海</li><li data-regionid="31174">江苏省</li><li data-regionid="31206">浙江省</li><li data-regionid="31226">安徽省</li><li data-regionid="31244">福建省</li><li data-regionid="31254">江西省</li><li data-regionid="31268">山东省</li><li data-regionid="31293">河南省</li><li data-regionid="31312">湖北省</li><li data-regionid="31331">湖南省</li><li data-regionid="31345">广东省</li><li data-regionid="31373">广西壮族自治区</li><li data-regionid="31383">海南省</li><li data-regionid="31386">重庆</li><li data-regionid="31427">四川省</li><li data-regionid="31445">贵州省</li><li data-regionid="31453">云南省</li><li data-regionid="31464">西藏自治区</li><li data-regionid="31467">陕西省</li><li data-regionid="31492">青海省</li><li data-regionid="31495">宁夏回族自治区</li><li data-regionid="31498">新疆维吾尔自治区</li><li data-regionid="63500">甘肃省</li><div class="clear"></div></ul></div><div id="secondstep" class="mc"></div><div id="thirdstep" class="mc mc3"></div></div></dd><dd id="expectedTime"><p>23:00前完成下单预计03月24日（周日） 送达</p></dd></dl><div class="clear"></div>	<dl class="address" id="address-tip"><dt>服务：</dt><dd>由我买网发货并提供售后服务。</dd></dl><div class="clear"></div>				</div>
                        <div id="loadBuy">
                                    <div class="merge">
                                    <div class="choose">
                                        <dl>
                                            <dt>数量：</dt>
                                            <dd>
                                                <div class="choose-amount"><span class="input_minus fl">-</span><input id="amount" type="text"
                                                        class="proinput fl" value="1"><input id="allamount"
                                                        type="hidden" value="470"><span class="input_plus fr">+</span></div>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div class="btn-box">
                                        <div class="btn-qr bar-code" style="display: none;">
                                            <div class="bar-code-cont">
                                                <div id="erweima_div" class="erweima">
                                                </div>
                                            </div>
                                        </div>
                                        <ul>
                                            <li class="buyBtn b-red" id="buyBtn" ><b class="png"></b>加入购物车</li>
                                            <li class="coupon-phone btn"><b class="png"></b>扫一扫下单 </li>
                                        </ul>
                                        <div class="clear"></div>
                                    </div>
                                </div>
                        </div>
                        <div class="btn-box" style="display:none;">
                            <dl>
                                <dt>提示：</dt>
                                <dd> </dd>
                            </dl>
                        </div>
               `;
            }
            $('.p-infor').html(html);

            $('#common_mark span').html(msg.评论);
            //数量
            $('.choose-amount').on('click', '.input_minus,.input_plus', function () {

                if ($(this).attr('class') == 'input_minus fl' && $('#amount').val() > 1) {
                    $('#amount').val($('#amount').val() - 1)

                } else if ($(this).attr('class') == 'input_plus fr') {
                    $('#amount').val($('#amount').val() * 1 + 1)
                }
            })


        }
    })
})


window.onload = function () {
    var imgBox = document.getElementsByClassName('jqzoom')[0];
    var boximg = imgBox.getElementsByTagName('img')[0];
    var aa = document.getElementsByClassName('details-left')[0];
    imgBox.onmousemove = function (ev) { //鼠标移入图片
        var boximg = imgBox.getElementsByTagName('img')[0];
        var X = ev.pageX;
        var Y = ev.pageY; //鼠标可视窗口位置
        var L = aa.offsetLeft;
        var T = aa.offsetTop;
        var n = imgBox.getElementsByTagName('div').length;
        if (n <= 0) {
            var div = document.createElement('div'); //创建遮罩节点
            div.className = 'imgZz'; //遮罩节点类名imgZz
            imgBox.appendChild(div); //插入遮罩节点
        }
        var imgZz = imgBox.getElementsByClassName('imgZz')[0];
        imgZz.style.left = X - L - imgZz.offsetWidth / 2 + 'px';
        imgZz.style.top = Y - T - imgZz.offsetHeight / 2 + 'px';
        //临界点-------------------------------------
        if (imgZz.offsetLeft < 0) {
            imgZz.style.left = 0;
        } else if (imgZz.offsetLeft > imgBox.offsetWidth - imgZz.offsetWidth) {
            imgZz.style.left = imgBox.offsetWidth - imgZz.offsetWidth + 'px';
        }
        if (imgZz.offsetTop < 0) {
            imgZz.style.top = 0;
        } else if (imgZz.offsetTop > imgBox.offsetHeight - imgZz.offsetHeight) {
            imgZz.style.top = imgBox.offsetHeight - imgZz.offsetHeight + 'px';
        }
        //临界点-------------------------------------
        var dd = document.getElementsByClassName('details-left')[0];
        if (n <= 0) {
            var div = document.createElement('div'); //创建图片放大节点
            div.className = 'imgBig'; //点类名imgBig
            dd.appendChild(div); //插入节点
        }
        var imgBig = dd.getElementsByClassName('imgBig')[0];
        var imgx = -imgZz.offsetLeft * 2.5;
        var imgy = -imgZz.offsetTop * 2.5;
        // if (!boximg.index) {
        //     boximg.index = 'url(1.png)';
        // }
        imgBig.style.background = ' url(' + boximg.src + ') no-repeat';
        imgBig.style.backgroundSize = '250% 250%';
        imgBig.style.backgroundPosition = imgx + 'px' + ' ' + imgy + 'px';
    }
    imgBox.onmouseleave = function () { //鼠标离开图片
        var dd = document.getElementsByClassName('details-left')[0];
        var imgZz = imgBox.getElementsByClassName('imgZz')[0];
        imgBox.removeChild(imgZz);
        var imgBig = dd.getElementsByClassName('imgBig')[0];
        dd.removeChild(imgBig);
    }
    $(function () {
        $('.spec-scroll').on('mouseover', 'li', function () {
            if ($(this).index() == 0) {
                $('.jqzoom img').prop('src', '../images/info_imgs/634274_1_pic500_8827.jpg')
            }
            if ($(this).index() == 1) {
                $('.jqzoom img').prop('src', '../images/info_imgs/634274_2_pic500_8075.jpg')
            }
            if ($(this).index() == 2) {
                $('.jqzoom img').prop('src', '../images/info_imgs/634274_3_pic500_4606.jpg')
            }

        })
    })

}
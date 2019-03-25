$(function () {
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

    //排序
    var num = 1;
    var now = {
        a1: num,
        a2: '',
        a3: '',
        a4: ''
    }
    html(now.a1, now.a2, now.a3, now.a4);
    $('.sort-1').on('click', 'a', function () {

        if ($(this).index() == '0') { //综合
            num = 1;
            $('.sort-1 a.price-hover').removeClass('price-hover');
            $('.sort-1 a.select').removeClass('select');
            $(this).addClass('select');
            now = {
                a1: num,
                a2: '',
                a3: '',
                a4: ''
            }
        } else if ($(this).index() == '1') { //销量
            $('.sort-1 a.price-hover').removeClass('price-hover');
            $('.sort-1 a.select').removeClass('select');
            $(this).addClass('select');
            num = 1;
            now = {
                a1: num,
                a2: '销量',
                a3: '1',
                a4: ''
            }

        } else if ($(this).index() == '2') { //价格
            $('.sort-1 a.select').removeClass('select');
            $(this).addClass('price-hover');
            num = 1;
            if ($(this).children('i').prop('class') == 'up') { //降序
                now = {
                    a1: num,
                    a2: '价格',
                    a3: '1',
                    a4: ''
                }

                $(this).children('i').prop('class', 'down')
                $(this).children('i').css('display', 'block')
            } else if ($(this).children('i').prop('class') == 'down') { //默认
                now = {
                    a1: num,
                    a2: '',
                    a3: '',
                    a4: ''
                }

                $(this).children('i').prop('class', '')
                $(this).children('i').css('display', 'none')
            } else { //-------------------------------------------------//升序
                now = {
                    a1: num,
                    a2: '价格',
                    a3: '1',
                    a4: ''
                }

                $(this).children('i').prop('class', 'up')
                $(this).children('i').css('display', 'block')
            }
        } else if ($(this).index() == '3') { //评论
            $('.sort-1 a.price-hover').removeClass('price-hover');
            $('.sort-1 a.select').removeClass('select');
            $(this).addClass('select');
            num = 1;
            now = {
                a1: num,
                a2: '评论',
                a3: '1',
                a4: ''
            }

        } else if ($(this).index() == '4') { //时间
            $('.sort-1 a.price-hover').removeClass('price-hover');
            $('.sort-1 a.select').removeClass('select');
            $(this).addClass('select');
            num = 1;
            now = {
                a1: num,
                a2: '价格',
                a3: '1',
                a4: ''
            }
        }
        html(now.a1, now.a2, now.a3, now.a4);
    })

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
    //价格区间
    $('.btn-sub').click(function () {
        if (!isNaN($('.endprice').val())) {
            if ($('.beginprice').val() == '最低价') {
                num = 1;
                now = {
                    a1: num,
                    a2: '价格区间',
                    a3: '0',
                    a4: $('.endprice').val()
                }
            } else {
                num = 1;
                now = {
                    a1: num,
                    a2: '价格区间',
                    a3: $('.beginprice').val(),
                    a4: $('.endprice').val()
                }
            }
            html(now.a1, now.a2, now.a3, now.a4);
        }
    })

    //搜索
    $('#searchProductListValue').next().on('click', function () {
        if ($('#searchProductListValue').val() != '在当前条件下搜索') {
            if ($('#searchProductListValue').val()) {
                // 待做
            }
        }
    })
    //分页




    //获取数据
    function html(a1, a2, a3, a4) {
        $.ajax({
            type: "POST",
            url: "../api/list.php",
            data: {
                nowpages: a1,
                class: a2,
                state: a3,
                info: a4
            },
            success: function (msg) {
                // console.log(msg);
                msg = JSON.parse(msg);
                var str = '';
                for (var i = 0; i < msg.html.length; i++) {
                    str += `<li class="product_item" data-id="${msg.html[i].id}">
                    <div class="search-box-title" id="proamount_602325"></div> <input type="hidden" id="j-packetmail_602325" value="false">
<div class="tab-content" data-gzpid="602325" id="602325_item">
 <div class="pImg" id="_gatrack_productlist_listpic_602325" data-ga="tocart_productlist"
     name="piwik-track-correct-product" data-product-id="602325"> <a target="_blank">
         <img class="lazyload" src="../images/list_imgs/634273_1_pic500_7166.jpg"
             alt="中粮家佳康 冷冻超值培根1kg袋装">
         <div class="label_icon"> <span id="new_icon_602325" class="new_icon png">每日鲜</span>
             <div class="limit_icon png" id="saleIcons_602325"></div>
         </div>
     </a> </div>
 <div class="price" id="itemPrices_602325">
 <b>￥</b>
 ${msg.html[i].价格}
 </div>
 <div class="clear">
 </div>
 <div class="list-title" id="_gatrack_productlist_listtitle_602325" keywordhiiiii="1">
     <p title="中粮家佳康 冷冻超值培根1kg袋装" keyword123="" ccccccc=""> <a target="_blank">${msg.html[i].标题}</a> </p>
 </div>
 <div class="list-icon"> <span class="zy">自营</span> </div>
 <div class="rated"> <span class="evaluated">已评价<a target="_blank"><em>${msg.html[i].评论}</em></a></span>
     <span class="collection" name="favorite"><b class="png"></b>收藏</span> <span
         class="addCart" id="item_buy_602325" style="display: block;"><b
             class="png"></b>加入购物车</span> <span class="addCart" id="item_apacketmial_602325"
         style="display: none;"><b class="png"></b>立即结算</span> <span class="addCart"
         id="item_soldout_602325" style="display: none;" name="notice"><b
             class="png"></b>到货通知</span> </div>
</div> <input type="hidden" id="j-packetmail_10498962" value="false">
<div class="tab-content" data-gzpid="10498962" id="10498962_item">
 <div class="pImg" id="_gatrack_productlist_listpic_10498962" data-ga="tocart_productlist"
     name="piwik-track-correct-product" data-product-id="10498962"> <a target="_blank"> <img
             class="lazyload" src="../images/list_imgs/634273_1_pic500_7166.jpg"
             alt="家佳康 冷冻超值培根1kg袋装">
         <div class="label_icon">
             <div class="limit_icon png" id="saleIcons_10498962"></div>
         </div>
     </a> </div>
 <div class="price" id="itemPrices_10498962"></div>
 <div class="clear"></div>
 <div class="list-title" id="_gatrack_productlist_listtitle_10498962" keywordhiiiii="1">
     <p title="家佳康 冷冻超值培根1kg袋装" keyword123="" ccccccc=""> <a target="_blank"> 家佳康
             冷冻超值培根1kg袋装
         </a> </p>
 </div>
 <div class="list-icon"> <span class="zy">自营</span> </div>
 <div class="rated"> <span class="evaluated">已评价<a target="_blank"><em>502</em></a></span>
     <span class="collection" name="favorite"><b class="png"></b>收藏</span> <span
         class="addCart" id="item_buy_10498962" style="display: none;"><b
             class="png"></b>加入购物车</span> <span class="addCart"
         id="item_apacketmial_10498962" style="display: none;"><b class="png"></b>立即结算</span>
     <span class="addCart" id="item_soldout_10498962" style="display: none;" name="notice"><b
             class="png"></b>到货通知</span> </div>
</div> <input type="hidden" id="j-packetmail_10446283" value="false">
<div class="tab-content" data-gzpid="10446283" id="10446283_item">
 <div class="pImg" id="_gatrack_productlist_listpic_10446283" data-ga="tocart_productlist"
     name="piwik-track-correct-product" data-product-id="10446283"> <a target="_blank"> <img
             class="lazyload" src="../images/list_imgs/634273_1_pic500_7166.jpg"
             alt="家佳康 冷冻超值培根1kg袋装">
         <div class="label_icon">
             <div class="limit_icon png" id="saleIcons_10446283"></div>
         </div>
     </a> </div>
 <div class="price" id="itemPrices_10446283"></div>
 <div class="clear"></div>
 <div class="list-title" id="_gatrack_productlist_listtitle_10446283" keywordhiiiii="1">
     <p title="家佳康 冷冻超值培根1kg袋装" keyword123="" ccccccc=""> <a target="_blank"> 家佳康
             冷冻超值培根1kg袋装
         </a> </p>
 </div>
 <div class="list-icon"> <span class="zy">自营</span> </div>
 <div class="rated"> <span class="evaluated">已评价<a target="_blank"><em>0</em></a></span>
     <span class="collection" name="favorite"><b class="png"></b>收藏</span> <span
         class="addCart" id="item_buy_10446283" style="display: none;"><b
             class="png"></b>加入购物车</span> <span class="addCart"
         id="item_apacketmial_10446283" style="display: none;"><b class="png"></b>立即结算</span>
     <span class="addCart" id="item_soldout_10446283" style="display: none;" name="notice"><b
             class="png"></b>到货通知</span> </div>
</div> <input type="hidden" id="j-packetmail_10377867" value="false">
<div class="tab-content" data-gzpid="10377867" id="10377867_item">
 <div class="pImg" id="_gatrack_productlist_listpic_10377867" data-ga="tocart_productlist"
     name="piwik-track-correct-product" data-product-id="10377867"> <a target="_blank"> <img
             class="lazyload" src="../images/list_imgs/634273_1_pic500_7166.jpg"
             alt="家佳康 冷冻超值培根1kg袋装">
         <div class="label_icon">
             <div class="limit_icon png" id="saleIcons_10377867"></div>
         </div>
     </a> </div>
 <div class="price" id="itemPrices_10377867"></div>
 <div class="clear"></div>
 <div class="list-title" id="_gatrack_productlist_listtitle_10377867" keywordhiiiii="1">
     <p title="家佳康 冷冻超值培根1kg袋装" keyword123="" ccccccc=""> <a target="_blank"> 家佳康
             冷冻超值培根1kg袋装
         </a> </p>
 </div>
 <div class="list-icon"> <span class="zy">自营</span> </div>
 <div class="rated"> <span class="evaluated">已评价<a target="_blank"><em>2</em></a></span>
     <span class="collection" name="favorite"><b class="png"></b>收藏</span> <span
         class="addCart" id="item_buy_10377867" style="display: none;"><b
             class="png"></b>加入购物车</span> <span class="addCart"
         id="item_apacketmial_10377867" style="display: none;"><b class="png"></b>立即结算</span>
     <span class="addCart" id="item_soldout_10377867" style="display: none;" name="notice"><b
             class="png"></b>到货通知</span> </div>
</div> <input type="hidden" id="j-packetmail_10475664" value="false">
<div class="tab-content" data-gzpid="10475664" id="10475664_item">
 <div class="pImg" id="_gatrack_productlist_listpic_10475664" data-ga="tocart_productlist"
     name="piwik-track-correct-product" data-product-id="10475664"> <a target="_blank"> <img
             class="lazyload" src="../images/list_imgs/634273_1_pic500_7166.jpg"
             alt="【两袋】家佳康 冷冻超值培根1kg袋装">
         <div class="label_icon">
             <div class="limit_icon png" id="saleIcons_10475664"></div>
         </div>
     </a> </div>
 <div class="price" id="itemPrices_10475664"></div>
 <div class="clear"></div>
 <div class="list-title" id="_gatrack_productlist_listtitle_10475664" keywordhiiiii="1">
     <p title="【两袋】家佳康 冷冻超值培根1kg袋装" keyword123="" ccccccc=""> <a target="_blank">
             【两袋】家佳康
             冷冻超值培根1kg袋装 </a> </p>
 </div>
 <div class="list-icon"> <span class="zy">自营</span> </div>
 <div class="rated"> <span class="evaluated">已评价<a target="_blank"><em>1393</em></a></span>
     <span class="collection" name="favorite"><b class="png"></b>收藏</span> <span
         class="addCart" id="item_buy_10475664" style="display: none;"><b
             class="png"></b>加入购物车</span> <span class="addCart"
         id="item_apacketmial_10475664" style="display: none;"><b class="png"></b>立即结算</span>
     <span class="addCart" id="item_soldout_10475664" style="display: none;" name="notice"><b
             class="png"></b>到货通知</span> </div>
</div>
</li>`;

                }
                //渲染
                $('.product-list ul').html(str);

                //翻页
                $('.page_l').unbind();
                $('.page_l').on('click', 'a', function () {
                    if ($(this).prop('class') == 'prev' && num > 1) {
                        --num;
                        $('.page_l .select').html(num);
                    } else if ($(this).prop('class') == 'next' && num < msg.allpages) {
                        ++num;
                        $('.page_l .select').html(num);
                    }
                    if (num > 1 && num < msg.allpages) {
                        now.a1 = num;
                        html(now.a1, now.a2, now.a3, now.a4);
                    }
                })
                $('.page_m span').html(msg.allpages);
                $('.page_r input').unbind();
                $('.page_r input').on('click', function () {
                    if ($('.page_input').val() > msg.allpages) {
                        $('.page_input').val(msg.allpages)
                    } else if ($('.page_input').val() < msg.allpages) {
                        $('.page_input').val('1')
                    }
                    num = $('.page_input').val();
                    now.a1 = num;
                    console.log(num)
                    html(now.a1, now.a2, now.a3, now.a4);
                })
                //跳转详情页
                $('.product_item').on('click', function () {
                    var data = $(this).attr('data-id');
                    $(window).attr('location', 'info.html?' + data)
                })
                //---
                $('.product_item').hover(function () {
                        $(this).addClass('on');
                    },
                    function () {
                        $(this).removeClass('on');
                    })

            }
        })
    }
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
               
            }
        }
    });

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


})
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


    //banner选项卡
    $('.title').on('mouseover', 'li', function () {
        $('.title .cur').removeClass('cur');
        $(this).addClass('cur');
        var index = $(this).index();
        $('.cont_wrap .cont').css('display', '').eq(index).css('display', 'block');
    })

    //导航栏hover
    $('.title').hover(function () {
        $(this).css('color', '#3ea600')
    }, function () {
        $(this).css('color', '#000')
    });

    //轮播图 
    //点击球球
    $('.slider-num').on('mouseover', 'li', function () {
        $('.slider-num .hover').removeClass('hover');
        $(this).addClass('hover');
        var index = $(this).index();
        $('.big-img li').css('display', 'none').eq(index).css('display', 'list-item');
    })
    //自动轮播
    var time; //轮播图定时器
    $('.banner-con a,.banner-con ol').mouseenter(function () {
        $('.drop-layer').css('display', 'block');
        clearInterval(time);
    })
    time = setInterval(function () {
        var index = $('.prompt.slider-num .hover').removeClass('hover').index();
        // var size = $('.slider-num li').size();
        $('.prompt.slider-num li').eq((index + 1) % 9).addClass('hover');
        $('.big-img li').css('display', 'none').eq((index + 8) % 9).css('display', 'list-item');
    }, 2000)
    $('.banner-con a,.banner-con ol').mouseleave(function () {
        $('.drop-layer').css('display', 'none');
        clearInterval(time);
        time = setInterval(function () {
            var index = $('.prompt.slider-num li.hover').removeClass('hover').index();
            // var size = $('.slider-num li').size();
            $('.prompt.slider-num li').eq((index + 1) % 9).addClass('hover');
            $('.big-img li').css('display', 'none').eq((index + 8) % 9).css('display', 'list-item');
        }, 2000)
    });
    // 点击切换
    $('.drop-layer').on('click', 'a', function () {
        if ($(this).prop('class') == 'fl') {
            var index = $('.prompt.slider-num li.hover').removeClass('hover').index();
            // var size = $('.slider-num li').size();
            $('.prompt.slider-num li').eq((index + 8) % 9).addClass('hover');
            $('.big-img li').css('display', 'none').eq((index + 8) % 9).css('display', 'list-item');
        } else if ($(this).prop('class') == 'fr') {
            var index = $('.prompt.slider-num li.hover').removeClass('hover').index();
            // var size = $('.slider-num li').size();
            $('.prompt.slider-num li').eq((index + 1) % 9).addClass('hover');
            $('.big-img li').css('display', 'none').eq((index + 1) % 9).css('display', 'list-item');
        }
    })

    //顶部吸顶搜索
    $(window).scroll(function () {
        if ($(document).scrollTop() >= '600') {
            $('.total-container').addClass('zTop');
        } else {
            $('.total-container').removeClass('zTop');
        };
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

    //楼层跳跃
    //出现
    if ($(document).scrollTop() >= 800 && $(document).scrollTop() <= 8900) {
        $('.float-nav').css('display', 'block');
    } else {
        $('.float-nav').css('display', 'none');
    };
    $(window).scroll(function () {
        if ($(document).scrollTop() >= 800 && $(document).scrollTop() <= 8900) {
            $('.float-nav').css('display', 'block');
        } else {
            $('.float-nav').css('display', 'none');
        };
    })
    //跳跃
    $('.float-nav ul').on('click', 'li', function () {
        $('.float-nav ul .curr').removeClass('curr');
        $(this).addClass('curr');
        var num = 30;
        var index = $(this).index();
        var top = $('.floor1').offset().top;
        var time = setInterval(function () {
            if ($(document).scrollTop() < index * 542 + top) {
                $(document).scrollTop($(document).scrollTop() + num);
                if ($(document).scrollTop() >= index * 542 + top) {
                    $(document).scrollTop(index * 542 + top);
                    clearInterval(time);
                }
            } else if ($(document).scrollTop() > index * 542 + top) {
                $(document).scrollTop($(document).scrollTop() - num);
                if ($(document).scrollTop() <= index * 542 + top) {
                    $(document).scrollTop(index * 542 + top);
                    clearInterval(time);
                }
            } else {
                clearInterval(time);
            }
            num += num * 0.8
        }, 30)
    })
    //焦点
    var top = $('.floor1').offset().top;
    var index = (($(document).scrollTop() - top) / 542).toFixed(0);
    $('.float-nav ul li').eq(index).addClass('curr');
    $(window).scroll(function () {
        var top = $('.floor1').offset().top;
        var index = (($(document).scrollTop() - top) / 542).toFixed(0);
        if (index >= 0 && index <= 10) {
            $('.float-nav ul .curr').removeClass('curr');
            $('.float-nav ul li').eq(index).addClass('curr');
        }
    })

    //list 选项卡
    $('.tit').on('mouseover', 'li', function () {
        $('.tit .cur').removeClass('cur');
        $(this).addClass('cur');
        var index = $(this).index();
        $(this).parents().children('.con.tab').css('display', '').eq(index).css('display', 'block');
    })

    //轮播图 
    //点击球球
    for (var i = 0; i < $('.floor').length; i++) {
        var leng = $('.floor' + i + ' .adv ol li').length;
        if (leng > 1)
            ad('floor' + i);
    }


    function ad(value) {
        $('.' + value + ' .adv ol').on('mouseover', 'li', function () {
            $('.' + value + ' .adv ol .hover').removeClass('hover');
            $(this).addClass('hover');
            var index = $(this).index();
            $('.' + value + ' .adv ul li').css('display', 'none').eq(index).css('display', 'list-item');
        })
        //自动轮播
        var time; //轮播图定时器

        $('.' + value + ' .adv').mouseenter(function () {
            $('.' + value + ' .adv .drop-layer').css('display', 'block');
            clearInterval(time);
        })
        time = setInterval(function () {
            var leng = $('.' + value + ' .adv ol li').length;
            var index = $('.' + value + ' .adv ol .hover').index();
            $('.' + value + ' .adv ol .hover').removeClass('hover');
            $('.' + value + ' .adv ol li').eq((index + 1) % leng).addClass('hover');
            $('.' + value + ' .adv ul li').css('display', 'none').eq((index + 1) % leng).css('display', 'list-item');
        }, 2000)
        $('.' + value + ' .adv').mouseleave(function () {
            $('.' + value + ' .adv .drop-layer').css('display', 'none');
            clearInterval(time);
            time = setInterval(function () {
                var leng = $('.' + value + ' .adv ol li').length;
                var index = $('.' + value + ' .adv ol .hover').index();
                $('.' + value + ' .adv ol .hover').removeClass('hover');
                $('.' + value + ' .adv ol li').eq((index + 1) % leng).addClass('hover');
                $('.' + value + ' .adv ul li').css('display', 'none').eq((index + 1) % leng).css('display', 'list-item');
            }, 2000)
        });
        // 点击切换
        $('.' + value + ' .adv .drop-layer').on('click', 'a', function () {
            if ($(this).prop('class') == 'fl prev') {
                var leng = $('.' + value + ' .adv ol li').length;
                var index = $('.' + value + ' .adv ol .hover').index();
                $('.' + value + ' .adv ol .hover').removeClass('hover');
                $('.' + value + ' .adv ol li').eq((index + (leng - 1)) % leng).addClass('hover');
                $('.' + value + ' .adv ul li').css('display', 'none').eq((index + (leng - 1)) % leng).css('display', 'list-item');
            } else if ($(this).prop('class') == 'fr next') {

                var leng = $('.' + value + ' .adv ol li').length;
                var index = $('.' + value + ' .adv ol .hover').index();
                $('.' + value + ' .adv ol .hover').removeClass('hover');
                $('.' + value + ' .adv ol li').eq((index + 1) % leng).addClass('hover');
                $('.' + value + ' .adv ul li').css('display', 'none').eq((index + 1) % leng).css('display', 'list-item');
            }
        })
    }

    var storages = window.localStorage;
    $.ajax({
        type: "POST",
        url: "api/regLog.php",
        data: 'username=' + storages.username + '&password=' + storages.password,
        success: function (msg) {
            msg = JSON.parse(msg);
            if (msg.password == '1') {
                $('.welcome__user-name').html(storages.username + '，您好！');
                $('.welcome__log').html('退出');
                $('.welcome__reg').css('display', 'none');
                //去购物车
                $('body').on('click', '.1234', function () {
                    $(window).attr('location', 'html/shop.html');
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
            $(window).attr('location', 'html/log.html');
        }
    })


    //列表页
    $('body').on('click', '.nav', function () {
        $(window).attr('location', 'html/list.html');
    })

})
//input  #Email
//灰色提示 #EmailLabel
//红色提示 #EmailMsg
$(function () {

    //小提示
    $('.mci_content').on('keyup', '.cont_input', function () {
        if ($(this).val()) {
            $(this).next().css('display', 'none')
        } else {
            $(this).next().css('display', 'block')
        }
    }).on('keypress', '.cont_input', function () {
        $(this).next().css('display', 'none')
    })


    //开关
    var ok = [];

    //验证码
    var jj = NaN;
    $('#validBtn').click(function () {
        jj = ranNum();
        $('#validBtn').val(jj);
    })



    //正则判断
    $('.mci_content').on('blur', '.cont_input', function () {
        //正则
        var Email = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
        var Tel = new RegExp(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/);
        var loginId = new RegExp(/^[a-zA-Z0-9\u2E80-\u9FFF_-]{2,16}$/)
        var password = new RegExp(/^[a-zA-Z0-9_-]{6,18}$/);
        //当前输入框
        var input = $(this).prop('id');
        var value = $(this).val();
        if (input == 'Email') {
            ok[0] = 0;
            if (!value) {
                $('#EmailMsg').css('display', 'none')
            } else if (Email.test(value) || Tel.test(value)) {
                //判断 手机号 或 邮箱 是否存在
                $.ajax({
                    type: "POST",
                    url: "../api/regLog.php",
                    data: 'userid=' + value,
                    success: function (msg) {
                        msg = JSON.parse(msg);
                        if (msg.userid == '0') {
                            $('#EmailMsg').css('display', 'none')
                            ok[0] = 1;
                        } else {
                            $('#loginIdMsg').css('display', 'block')
                                .html('该邮箱或手机不可用');
                        }
                    }
                });
            } else {
                $('#loginIdMsg').css('display', 'block')
                    .html('请您输入正确的邮箱或手机');
            }
        } else if (input == 'loginId') {
            ok[1] = 0;
            if (!value) {
                $('#loginIdMsg').css('display', 'none')
            } else if (loginId.test(value)) {
                $.ajax({
                    type: "POST",
                    url: "../api/regLog.php",
                    data: 'username=' + value,
                    success: function (msg) {
                        msg = JSON.parse(msg);
                        if (msg.username == '0') {
                            $('#loginIdMsg').css('display', 'none')
                            ok[1] = 1;
                        } else {
                            $('#loginIdMsg').css('display', 'block')
                                .html('该用户名已被使用');
                        }
                    }
                });
            } else {
                $('#loginIdMsg').css('display', 'block')
                    .html('用户名为2~16个字母、数字、中文或下划线');
            }
        } else if (input == 'password') {
            ok[2] = 0;
            if (!value) {
                $('#passwordMsg').css('display', 'none')
            } else if (password.test(value)) {
                if ($('#password2').val()) {
                    if (value == $('#password2').val()) {
                        $('#password2Msg').css('display', 'none')
                    } else {
                        $('#password2Msg').css('display', 'block')
                            .html('两次密码不一样');
                    }
                }
                $('#passwordMsg').css('display', 'none')
                ok[2] = 1;
            } else {
                $('#passwordMsg').css('display', 'block')
                    .html('密码为为6~18个字母、数字或下划线')
            }
        } else if (input == 'password2') {
            ok[3] = 0;
            if (!value) {
                $('#password2Msg').css('display', 'none')
            } else if (value == $('#password').val()) {
                $('#password2Msg').css('display', 'none')
                ok[3] = 1;
            } else {
                $('#password2Msg').css('display', 'block')
                    .html('两次密码不一样');
            }
        } else if (input == 'getCode') {
            ok[4] = 0;
            if (!value) {

            } else if (jj == value) {
                $('#validBtn').val('验证成功');
                ok[4] = 1;
            } else {
                $('#validBtn').val('重新获取');
                $('#getCode').val('验证失败');
            }
        }

    })


    //注册
    $('#submitBtn').click(function () {
        if (ok.indexOf(0) == -1 && $('#checkBox').prop('checked')) {
            console.log(1);
            $.ajax({
                type: "POST",
                url: "../api/regLog.php",
                data: {
                    userid: $('#Email').val(),
                    username: $('#loginId').val(),
                    password: $('#password2').val()
                },
                success: function (msg) {
                    msg = JSON.parse(msg);
                    console.log(msg);
                    if (msg.reg == '1') {
                        $(window).attr('location', '../html/log.html');
                        $('input.cont_input').val('');
                        $('.prompt_login').css('display', 'block');
                    }
                }
            });
        }
    })
})
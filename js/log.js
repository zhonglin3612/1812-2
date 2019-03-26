$(function () {
    //小提示
    $('.mcicont_input').on('keyup', '.cont_input', function () {
        if ($(this).val()) {
            $(this).next().css('display', 'none')
        } else {
            $(this).next().css('display', 'inline')
        }
    }).on('keypress', '.cont_input', function () {
        $(this).next().css('display', 'none')
    })


    $('#login_submit_btn_real').click(function () {
        if ($('#cartPassword').val() && $('#cartLoginId').val()) {
            $.ajax({
                type: "POST",
                url: "../api/regLog.php",
                data: 'username=' + $('#cartLoginId').val() + '&password=' + $('#cartPassword').val(),
                success: function (msg) {
                    msg = JSON.parse(msg);
                    console.log(msg)
                    if (msg.password == '1') {
                        var storages = window.localStorage;
                        storages.username = $('#cartLoginId').val();
                        storages.password = $('#cartPassword').val();
                        $(window).attr('location', '../index.html');
                    } else {
                        alert('密码或账户错误');
                    }
                }
            });
        }
    })
})
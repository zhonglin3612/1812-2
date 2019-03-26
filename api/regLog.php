<?php

//连接数据库  sqlLOg
include 'h51812.php';

// 获取前端发送的数据
if ($_GET) {           //判断传输方式  GET方式
    $userid = isset($_GET['userid']) ? $_GET['userid'] : '';
    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';
} else if ($_POST) {   //判断传输方式   POST方式
    $userid = isset($_POST['userid']) ? $_POST['userid'] : '';
    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
}

// //查询用户名
$sql = "select * from username where username='$username'";
$sqlResult = $sqlLog->query($sql);

// //判断是否有该用户名
if ($sqlResult->num_rows) {
    $isOk['username'] = '1';
} else {
    $isOk['username'] = '0';
}

// //查询手机号或邮箱
$sql = "select * from username where userid='$userid'";
$sqlResult = $sqlLog->query($sql);

// //判断是否有手机号或邮箱
if ($sqlResult->num_rows) {
    $isOk['userid'] = '1';
} else {
    $isOk['userid'] = '0';
}

// //查询用户名和密码
if ($isOk['username'] == '0') {
    $sql = "select * from username where userid='$username' and password='$password'";
    $sqlResult = $sqlLog->query($sql);

    //判断密码与用户名是否一致
    if ($sqlResult->num_rows) {
        $isOk['password'] = '1';
    } else {
        $isOk['password'] = '0';
    }
}
if ($isOk['username'] == '1') {
    $sql = "select * from username where username='$username' and password='$password'";
    $sqlResult = $sqlLog->query($sql);

    //判断密码与用户名是否一致
    if ($sqlResult->num_rows) {
        $isOk['password'] = '1';
    } else {
        $isOk['password'] = '0';
    }
}

// //注册账号
if ($isOk['username'] == '0' && $isOk['userid'] == '0' && $password) {
    $sql = "insert into username(username,password,userid) values('$username','$password','$userid')";
    $sqlResult = $sqlLog->query($sql);
    $isOk['reg'] = $sqlResult;
}

//获取结果集  数据部分
// $arr = $sqlResult->fetch_all(MYSQLI_ASSOC);
// $isOk['测试'] = $password;
//将结果转换成字符 发送数据到前端
echo json_encode($isOk, JSON_UNESCAPED_UNICODE);

// //关闭结果集
// $sqlResult->close();

//断开与数据库的连接
$sqlLog->close();

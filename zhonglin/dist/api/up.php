<?php

//连接数据库  sqlLOg
include 'h51812.php';

// 获取前端发送的数据

$addnum = isset($_POST['addnum']) ? $_POST['addnum'] : '';
$wupingid = isset($_POST['wupingid']) ? $_POST['wupingid'] : '';
$username = isset($_POST['username']) ? $_POST['username'] : '';
$add = isset($_POST['add']) ? $_POST['add'] : '';
$id = isset($_POST['id']) ? $_POST['id'] : '';
$x1 = isset($_POST['x1']) ? $_POST['x1'] : '';
$x2 = isset($_POST['x2']) ? $_POST['x2'] : '';
$x3 = isset($_POST['x3']) ? $_POST['x3'] : '';
$x4 = isset($_POST['x4']) ? $_POST['x4'] : '';
$x5 = isset($_POST['x5']) ? $_POST['x5'] : '';
$x6 = isset($_POST['x6']) ? $_POST['x6'] : '';
$x8 = isset($_POST['x8']) ? $_POST['x8'] : '';
//查询用户id



if ($id) {
    // //查询购物车是否有该物品
    $sql = "select * from shop where id='$wupingid' and `用户`='$id' ";
    $sqlResult = $sqlLog->query($sql);
    if ($sqlResult->num_rows) {
        $arr = $sqlResult->fetch_all(MYSQLI_ASSOC);
        $num = $arr[0]['数量'];
        $num = $num * 1 + $addnum * 1;
        $s = "update shop set `数量`='$num' where id='$wupingid' and `用户`='$id'";
        $s = $sqlLog->query($s);
    } else {
        $sql = "select * from commodity  where id='$wupingid' ";
        $sqlResult = $sqlLog->query($sql);
        $arr = $sqlResult->fetch_all(MYSQLI_ASSOC);
        echo json_encode($arr, JSON_UNESCAPED_UNICODE);
        if ($add) {
            $qwe = "insert into shop(id,`标题`,`价格`,`评论`,`时间`,`重量`,`类别`,`用户`,`销量`,`数量`) values('$wupingid','$x1','$x2','$x3','$x4','$x5','$x6','$id','$x8','$addnum')";
            $sqlResult = $sqlLog->query($qwe);
        }
    }
} else {
    $sql = "select id from username where userid='$username' or username='$username' ";
    $sqlResult = $sqlLog->query($sql);
    $arr = $sqlResult->fetch_all(MYSQLI_ASSOC);
    echo json_encode($arr, JSON_UNESCAPED_UNICODE);
}

//将结果转换成字符 发送数据到前端
// echo json_encode($isok, JSON_UNESCAPED_UNICODE);

//断开与数据库的连接
$sqlLog->close();

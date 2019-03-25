<?php

//连接数据库  sqlLOg
include 'h51812.php';

// 获取前端发送的数据

$usernameid = isset($_POST['usernameid']) ? $_POST['usernameid'] : ' ';

$sql = "select id from username  where userid ='$usernameid' or username ='$usernameid' ";
// 执行语句查询
$sqlResult = $sqlLog->query($sql);
//获取结果集  数据部分
$arr = $sqlResult->fetch_all(MYSQLI_ASSOC);
$id = $arr[0]['id'];
$sql = "select * from shop  where `用户`='$id'";
// 执行语句查询
$sqlResult = $sqlLog->query($sql);
//获取结果集  数据部分
$arr = $sqlResult->fetch_all(MYSQLI_ASSOC);

$isOk = $arr;

// //将结果转换成字符 发送数据到前端
echo json_encode($isOk, JSON_UNESCAPED_UNICODE);

// //关闭结果集
// $sqlResult->close();

//断开与数据库的连接
$sqlLog->close();

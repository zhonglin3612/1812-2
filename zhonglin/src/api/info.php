<?php

//连接数据库  sqlLOg
include 'h51812.php';

// 获取前端发送的数据

$id = isset($_POST['id']) ? $_POST['id'] : ' '; //id

$sql = "select * from commodity  where id='$id'";
// 执行语句查询
$sqlResult = $sqlLog->query($sql);
//获取结果集  数据部分
$arr = $sqlResult->fetch_all(MYSQLI_ASSOC);
$isOk['html'] = $arr;


// //将结果转换成字符 发送数据到前端
echo json_encode($isOk, JSON_UNESCAPED_UNICODE);

// //关闭结果集
// $sqlResult->close();

//断开与数据库的连接
$sqlLog->close();

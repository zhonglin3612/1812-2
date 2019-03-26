<?php

//连接数据库  sqlLOg
include 'h51812.php';

// 获取前端发送的数据

$add = isset($_POST['add']) ? $_POST['add'] : ' ';
$num = isset($_POST['num']) ? $_POST['num'] : ' ';

$sql = "update shop set `数量`='$num' where id='$add'";

// 执行语句查询
$sqlResult = $sqlLog->query($sql);

// //将结果转换成字符 发送数据到前端
echo json_encode($sqlResult, JSON_UNESCAPED_UNICODE);

//断开与数据库的连接
$sqlLog->close();

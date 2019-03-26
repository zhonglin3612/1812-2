<?php

//连接数据库  sqlLOg
include 'h51812.php';

// 获取前端发送的数据

$arr = isset($_POST['arr']) ? $_POST['arr'] : ' ';
$strnum = isset($_POST['strnum']) ? $_POST['strnum'] : ' ';

$arr1 = explode(',', $arr);
var_dump($arr1);
for ($i = 0; $i < $strnum; $i = $i + 1) {
    $dd = $arr1[$i];
    $sql = "delete from shop where id = '$dd'";
    $sqlResult = $sqlLog->query($sql);
}

// 执行语句查询


// //将结果转换成字符 发送数据到前端
echo json_encode($sqlResult, JSON_UNESCAPED_UNICODE);

//断开与数据库的连接
$sqlLog->close();

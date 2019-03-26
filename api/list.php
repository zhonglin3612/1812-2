<?php

//连接数据库  sqlLOg
include 'h51812.php';

// 获取前端发送的数据

$nowpages = isset($_POST['nowpages']) ? $_POST['nowpages'] : ' '; //当前页数
$class = isset($_POST['class']) ? $_POST['class'] : ' '; //排序模式
$state = isset($_POST['state']) ? $_POST['state'] : ' '; //排序方式
$info = isset($_POST['info']) ? $_POST['info'] : ' '; //搜索内容

//排序
$nowpages = ($nowpages - 1) * 12;
if ($class == '价格区间') {
    $sql = "select * from commodity where  `价格`  between $state and $info order by `价格`  limit $nowpages,12";
} else if ($class == '搜索') {
    $sql = "SELECT * FROM commodity WHERE $info limit $nowpages,12"; //`标题` LIKE '%三%'
} else if ($class) { //排序
    if ($state > 0) {
        $sql = "select * from commodity order by `$class` limit  $nowpages,12";
    } else if ($state < 0) {
        $sql = "select * from commodity order by `$class` desc limit $nowpages,12";
    }
} else {
    $sql = "select * from commodity  limit  $nowpages,12";
}
// 执行语句查询
$sqlResult = $sqlLog->query($sql);
//获取结果集  数据部分
$arr = $sqlResult->fetch_all(MYSQLI_ASSOC);
$isOk['html'] = $arr;


// //查询总页数
$sql = "select * from commodity";
$sqlResult = $sqlLog->query($sql);
$isOk['allpages'] = ceil($sqlResult->num_rows / 12);

// //将结果转换成字符 发送数据到前端
echo json_encode($isOk, JSON_UNESCAPED_UNICODE);

// //关闭结果集
// $sqlResult->close();

//断开与数据库的连接
$sqlLog->close();

<?php

//页面格式为html，编码为utf-8
header("content-type:text/html;charset=utf-8");

//准备连接数据库---配置参数
$serverName = 'localhost';  //服务器名
$dbUserName = 'root';       //数据库账号
$dbPassWord = '';           //数据库密码
$sqlSumName = 'h51812';     //子数据库名

//开始连接数据库---请求连接
$sqlLog = new mysqli($serverName, $dbUserName, $dbPassWord, $sqlSumName);

//检查是否连接数据库
if ($sqlLog->connect_errno) {             //连接出错 
    die('-连接出错- 丨 -错误代码：' . $sqlLog->connect_errno . '- | -错误描述：' . $sqlLog->connect_error . '-');
}

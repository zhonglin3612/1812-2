/*
Navicat MySQL Data Transfer

Source Server         : my
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : h51812

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2019-03-25 11:16:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for username
-- ----------------------------
DROP TABLE IF EXISTS `username`;
CREATE TABLE `username` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userid` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of username
-- ----------------------------
INSERT INTO `username` VALUES ('1', '10086@qq.com', 'zlc438', 'zlcc');
INSERT INTO `username` VALUES ('2', '19942195126', 'zlc438438', '郑亮琛');
INSERT INTO `username` VALUES ('3', '842546605@qq.com', 'zhonglin3612', '钟林');
INSERT INTO `username` VALUES ('4', '100826@qq.com', 'qweqwe', 'qweqwe');
INSERT INTO `username` VALUES ('5', '管理员', 'qwe', 'qwe');
SET FOREIGN_KEY_CHECKS=1;

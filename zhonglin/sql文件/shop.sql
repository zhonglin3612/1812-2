/*
Navicat MySQL Data Transfer

Source Server         : my
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : h51812

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2019-03-25 11:15:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for shop
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
  `id` int(11) DEFAULT NULL,
  `标题` varchar(255) DEFAULT NULL,
  `价格` int(255) DEFAULT NULL,
  `评论` int(255) DEFAULT NULL,
  `时间` int(255) DEFAULT NULL,
  `重量` int(255) DEFAULT NULL,
  `类别` varchar(255) DEFAULT NULL,
  `用户` varchar(255) DEFAULT NULL,
  `销量` int(11) DEFAULT NULL,
  `数量` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop
-- ----------------------------
INSERT INTO `shop` VALUES ('5', '中粮家佳康香嫩梅花肉 5', '78978', '67', '5', '7', '中式', '5', '564', '1');
INSERT INTO `shop` VALUES ('3', '中粮家佳康香嫩梅花肉 3', '456', '4567', '3', '67', '中式', '5', '4561', '6');
INSERT INTO `shop` VALUES ('7', '中粮家佳康香嫩梅花肉 7', '45', '6', '7', '978', '中式', '5', '6451', '18');
INSERT INTO `shop` VALUES ('2', '中粮家佳康香嫩梅花肉 2', '456', '7897', '2', '45', '中式', '5', '561', '1');
SET FOREIGN_KEY_CHECKS=1;

/*
Navicat MySQL Data Transfer

Source Server         : my
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : h51812

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2019-03-25 12:29:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for commodity
-- ----------------------------
DROP TABLE IF EXISTS `commodity`;
CREATE TABLE `commodity` (
  `id` int(255) NOT NULL,
  `标题` varchar(255) DEFAULT NULL,
  `销量` int(255) DEFAULT NULL,
  `价格` int(255) DEFAULT NULL,
  `评论` int(255) DEFAULT NULL,
  `时间` int(255) DEFAULT NULL,
  `重量` int(255) DEFAULT NULL,
  `类别` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of commodity
-- ----------------------------
INSERT INTO `commodity` VALUES ('1', '中粮家佳康香嫩梅花肉 1', '31', '998', '786', '1', '32', '西式');
INSERT INTO `commodity` VALUES ('2', '中粮家佳康香嫩梅花肉 2', '561', '456', '7897', '2', '45', '中式');
INSERT INTO `commodity` VALUES ('3', '中粮家佳康香嫩梅花肉 3', '4561', '456', '4567', '3', '67', '中式');
INSERT INTO `commodity` VALUES ('4', '中粮家佳康香嫩梅花肉 4', '6451', '789', '6', '4', '789', '西式');
INSERT INTO `commodity` VALUES ('5', '中粮家佳康香嫩梅花肉 5', '564', '78978', '67', '5', '7', '中式');
INSERT INTO `commodity` VALUES ('6', '中粮家佳康香嫩梅花肉 6', '4561', '65', '78', '6', '8', '中式');
INSERT INTO `commodity` VALUES ('7', '中粮家佳康香嫩梅花肉 7', '6451', '45', '6', '7', '978', '中式');
INSERT INTO `commodity` VALUES ('8', '中粮家佳康香嫩梅花肉 8', '789', '54', '67', '8', '9', '西式');
INSERT INTO `commodity` VALUES ('9', '中粮家佳康香嫩梅花肉 9', '645', '548', '78', '9', '78', '中式');
INSERT INTO `commodity` VALUES ('10', '中粮家佳康香嫩梅花肉 10', '55', '87', '6', '10', '789', '中式');
INSERT INTO `commodity` VALUES ('11', '中粮家佳康香嫩梅花肉 11', '21', '987', '7', '11', '78', '西式');
INSERT INTO `commodity` VALUES ('12', '中粮家佳康香嫩梅花肉 12', '78', '8798', '86', '12', '200', '中式');
INSERT INTO `commodity` VALUES ('13', '中粮家佳康香嫩梅花肉 13', '78978', '79', '78', '13', '2', '西式');
INSERT INTO `commodity` VALUES ('14', '中粮家佳康香嫩梅花肉 14', '78', '656', '67', '14', '2231', '中式');
INSERT INTO `commodity` VALUES ('15', '中粮家佳康香嫩梅花肉 15', '78', '655', '8678', '15', '232', '西式');
INSERT INTO `commodity` VALUES ('16', '中粮家佳康香嫩梅花肉 16', '81', '53', '6', '16', '5', '中式');
INSERT INTO `commodity` VALUES ('17', '中粮家佳康香嫩梅花肉 17', '65', '32', '78', '17', '46', '中式');
INSERT INTO `commodity` VALUES ('18', '中粮家佳康香嫩梅花肉 18', '455', '321', '67', '18', '5', '西式');
INSERT INTO `commodity` VALUES ('19', '中粮家佳康香嫩梅花肉 19', '753', '326', '86', '19', '54', '中式');
INSERT INTO `commodity` VALUES ('20', '中粮家佳康香嫩梅花肉 20', '364', '78', '8', '20', '56', '中式');
INSERT INTO `commodity` VALUES ('21', '中粮家佳康香嫩梅花肉 21', '489', '3', '9', '21', '65', '西式');
INSERT INTO `commodity` VALUES ('22', '中粮家佳康香嫩梅花肉 22', '564', '54', '9', '22', '455', '中式');
INSERT INTO `commodity` VALUES ('23', '中粮家佳康香嫩梅花肉 23', '2313', '6', '789', '23', '2', '中式');
INSERT INTO `commodity` VALUES ('24', '中粮家佳康香嫩梅花肉 24', '3133', '32', '7', '24', '32322', '西式');
INSERT INTO `commodity` VALUES ('25', '中粮家佳康香嫩梅花肉 25', '446', '3', '8978', '25', '24', '中式');
INSERT INTO `commodity` VALUES ('26', '中粮家佳康香嫩梅花肉 26', '61', '5', '7897', '26', '456', '中式');
INSERT INTO `commodity` VALUES ('27', '中粮家佳康香嫩梅花肉 27', '51', '65', '789', '27', '45', '西式');
INSERT INTO `commodity` VALUES ('28', '中粮家佳康香嫩梅花肉 28', '489', '465', '78', '28', '22', '中式');
INSERT INTO `commodity` VALUES ('29', '中粮家佳康香嫩梅花肉 29', '894', '5', '9', '29', '13', '中式');
INSERT INTO `commodity` VALUES ('30', '中粮家佳康香嫩梅花肉 30', '877', '56', '78', '30', '312', '西式');
INSERT INTO `commodity` VALUES ('31', '中粮家佳康香嫩梅花肉 31', '556', '32', '789', '31', '321', '中式');
INSERT INTO `commodity` VALUES ('32', '中粮家佳康香嫩梅花肉 32', '87', '13', '78', '32', '3', '西式');
INSERT INTO `commodity` VALUES ('33', '中粮家佳康香嫩梅花肉 33', '65', '38', '9', '33', '54', '中式');
INSERT INTO `commodity` VALUES ('34', '中粮家佳康香嫩梅花肉 34', '741', '8', '79', '34', '123', '西式');
INSERT INTO `commodity` VALUES ('35', '中粮家佳康香嫩梅花肉 35', '67', '58', '7', '35', '78', '中式');
INSERT INTO `commodity` VALUES ('36', '中粮家佳康香嫩梅花肉 36', '17', '56', '9', '36', '23', '西式');
INSERT INTO `commodity` VALUES ('37', '中粮家佳康香嫩梅花肉 37', '7891', '465', '956', '37', '154', '中式');
INSERT INTO `commodity` VALUES ('38', '中粮家佳康香嫩梅花肉 38', '7891', '46', '4', '38', '654', '西式');
INSERT INTO `commodity` VALUES ('39', '中粮家佳康香嫩梅花肉 39', '7891', '46', '6', '39', '456', '西式');
INSERT INTO `commodity` VALUES ('40', '中粮家佳康香嫩梅花肉 40', '879', '6', '467', '40', '4566', '中式');

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

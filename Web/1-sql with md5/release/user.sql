/*
 Navicat Premium Data Transfer

 Source Server         : nbsps
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : user

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 19/01/2022 16:32:19
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for credential
-- ----------------------------
DROP TABLE IF EXISTS `credential`;
CREATE TABLE `credential`  (
  `ID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `EID` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `Salary` int(9) NULL DEFAULT NULL,
  `birth` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `SSN` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `Password` varchar(300) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of credential
-- ----------------------------
INSERT INTO `credential` VALUES (1, 'Boby', '20000', 30000, '4/20', '10213352', 'b78ed97677c161c1c82c142906674ad15242b2d4');
INSERT INTO `credential` VALUES (2, 'Alice', '10000', 20000, '9/20', '10211002', '123456');
INSERT INTO `credential` VALUES (3, 'Ryan', '30000', 50000, '4/10', '98993524', 'a3c50276cb120637cca669eb38fb9928b017e9ef');
INSERT INTO `credential` VALUES (4, 'Samy', '40000', 90000, '1/11', '32193525', '995b8b8c183f349b3cab0ae7fccd39133508d2af');
INSERT INTO `credential` VALUES (5, 'Ted', '50000', 110000, '11/3', '32111111', '99343bff28a7bb51cb6f22cb20a618701a2c2f58');
INSERT INTO `credential` VALUES (6, 'Admin', '99999', 400000, '3/5', '43254314', 'a5bdf35a1df4ea895905f6f6618e83951a6effc0');

-- ----------------------------
-- Table structure for hashtable
-- ----------------------------
DROP TABLE IF EXISTS `hashtable`;
CREATE TABLE `hashtable`  (
  `ID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `EID` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `Salary` int(9) NULL DEFAULT NULL,
  `birth` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `SSN` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `Password` varbinary(300) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hashtable
-- ----------------------------
INSERT INTO `hashtable` VALUES (10, 'Admin', '1000', 1000, '3/5', '12432420', 0xBD6EF3B1233A83156E7033A2D2648A8C);
INSERT INTO `hashtable` VALUES (11, 'Alice', '1000', 1000, '3/5', '12432420', 0xE10ADC3949BA59ABBE56E057F20F883E);

SET FOREIGN_KEY_CHECKS = 1;

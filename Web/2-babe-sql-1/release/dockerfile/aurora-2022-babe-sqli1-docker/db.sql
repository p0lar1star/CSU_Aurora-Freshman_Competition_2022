-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.26 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for mylogin
CREATE DATABASE IF NOT EXISTS `mylogin` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `mylogin`;

-- Dumping structure for table mylogin.flag
CREATE TABLE IF NOT EXISTS `flag` (
  `id` int(11) NOT NULL,
  `f1ag` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- Dumping data for table mylogin.flag: 2 rows
/*!40000 ALTER TABLE `flag` DISABLE KEYS */;
INSERT INTO `flag` (`id`, `f1ag`) VALUES
	(1, '{I\'m-just-a-fake-flag:)}'),
	(2, 'secure-file-priv=""'),
	(3, 'flag is somewhere');
/*!40000 ALTER TABLE `flag` ENABLE KEYS */;

-- Dumping structure for table mylogin.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL,
  `email` varchar(50) NOT NULL DEFAULT '',
  `password` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- Dumping data for table mylogin.users: 3 rows
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `email`, `password`) VALUES
	(1, 'test@test.com', '12345'),
	(2, 'admin@admin.com', 'admin123'),
	(3, 'Seems that', 'nothing here!'),
	(4, 'no no no!', 'See see other tables?'),
	(5, 'Actually..', 'No more here...');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

module.exports = {
    "up": "CREATE TABLE IF NOT EXISTS `userdetails` (`id` int NOT NULL AUTO_INCREMENT,`socketid` varchar(500) NOT NULL,`usertype` varchar(500) NOT NULL,PRIMARY KEY (`id`))ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;",
    "down": "DROP TABLE userdetails"
}
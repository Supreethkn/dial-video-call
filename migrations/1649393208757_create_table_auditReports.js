module.exports = {
    "up": "CREATE TABLE IF NOT EXISTS `auditReports` (`id` int NOT NULL AUTO_INCREMENT,`callStartTime` datetime NOT NULL,`operatorName` varchar(45) NOT NULL,`callDuration` varchar(100) NOT NULL,`callEndTime` datetime NOT NULL,`callOrigin` varchar(500) NOT NULL,`reason` varchar(500) NOT NULL,`operator_recording` varchar(500) DEFAULT NULL,`user_recording` varchar(500) DEFAULT NULL,`roomId` varchar(500) NOT NULL,PRIMARY KEY (`id`))ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci",
    "down": "DROP TABLE auditReports"
}
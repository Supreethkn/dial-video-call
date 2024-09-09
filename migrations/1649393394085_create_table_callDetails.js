module.exports = {
    "up": "CREATE TABLE IF NOT EXISTS `callDetails` (\
        `id` int NOT NULL AUTO_INCREMENT,\
        `roomId` varchar(500) NOT NULL,\
        `callOriginationTime` datetime NOT NULL,\
        `callOrigin` varchar(45) NOT NULL,\
        // `Kiosk` varchar(100) DEFAULT NULL,\
        `CustomerRating` int DEFAULT NULL,\
        `FirstName` varchar(255) DEFAULT NULL,\
        `LastName` varchar(255) DEFAULT NULL,\
        `FlightNo` varchar(100) DEFAULT NULL,\
        `Query` text DEFAULT NULL,\
        `Notes` text DEFAULT NULL,\
        PRIMARY KEY (`id`)\
    ) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;",
    "down": "DROP TABLE IF EXISTS `callDetails`;"
};
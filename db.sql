--USE dbxrjasi1;

START TRANSACTION;
CREATE TABLE IF NOT EXISTS `expenses` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `item` varchar(60) NOT NULL,
  `shop` varchar(60) NOT NULL,
  `category` varchar(60) NOT NULL,
  `price` decimal(8,2) DEFAULT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `expenses`(`item`, `shop`, `category`, `price`, `date`) VALUES ('Movie tickets', 'Niagara', 'Leisure', 6.00, '2023-01-22');
INSERT INTO `expenses`(`item`, `shop`, `category`, `price`, `date`) VALUES ('Baby supplies', 'OZbaby', 'Baby stuff', 127.90, '2023-01-16');
INSERT INTO `expenses`(`item`, `shop`, `category`, `price`, `date`) VALUES ('Blu-rays', 'Arrow Store', 'Leisure', 58.90, '2023-02-18');
INSERT INTO `expenses`(`item`, `shop`, `category`, `price`, `date`) VALUES ('Groceries', 'Prisma', 'Necessities', 113.78, '2023-02-01');

DROP TABLE expenses;

CREATE DATABASE IF NOT EXISTS msisdb;
USE msisdb;


DROP TABLE IF EXISTS Book;
CREATE TABLE `Book` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `Title` VARCHAR(75) NULL,
  `Author` VARCHAR(75) NULL,
  `Year_Published` VARCHAR(4) NULL,
  `Publisher` VARCHAR(100) NULL,
  `Pages` INT NULL,
  `MSRP` DOUBLE NULL,
  PRIMARY KEY (`id`));


INSERT INTO Book ( Title, Author, Year_Published,Publisher,Pages, MSRP ) VALUES 
('Moby Dick','Herman Melville',1851,'CreateSpace Independent Publishing Platform',378,$13.45),
('To Kill a Mockingbird','Harper Lee',1960,'Harper Perennial',336,$7.19),
('Old Man and the Sea','Ernest Hemingway',1952,'Schribner, Reissue Edition',128,$11.49),
('A Tale of Two Cities','Charles Dickens',1859,'CreateSpace Independent Publishing Platform',288,$9.99);


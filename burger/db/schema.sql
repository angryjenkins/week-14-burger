create database burgers_db;
use burgers_db;

CREATE TABLE `burgers_db`.`burgers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(60) NOT NULL,
  `devoured` BIT NOT NULL,
  `date` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`)
);


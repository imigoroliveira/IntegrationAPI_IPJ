CREATE DATABASE IF NOT EXISTS ipj_databse;

USE ipj_databse;

CREATE TABLE IF NOT EXISTS users (
  id INT(11) AUTO_INCREMENT,
  email VARCHAR(320),
  PRIMARY KEY (id)
);

INSERT INTO users VALUE(0, 'admin@example.com');

CREATE TABLE Admin (name INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Username VARCHAR(255) ,
    password VARCHAR(100),
     CONSTRAINT Name UNIQUE (Username)
);
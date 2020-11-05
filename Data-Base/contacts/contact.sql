CREATE TABLE Messages (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
     SenderId int,
     message varchar(400),
     ReceiverId int,
     type varchar(20)
);

CREATE TABLE Contacts (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
     UsersId int,
     FriendsId int,
     UserType varchar(20)
);

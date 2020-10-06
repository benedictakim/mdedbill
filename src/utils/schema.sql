### Schema

CREATE DATABASE hb1300_db;
USE hb1300_db;

CREATE TABLE hb1300votes
(
	id int NOT NULL AUTO_INCREMENT,
	firstname varchar(255) NOT NULL,
    lastname varchar(255) NOT NULL,
    party varchar (1) NOT NULL,
    vote2020 varchar (255),
    district varchar (3) NOT NULL,
    county varchar (255) NOT NULL,
    county2 varchar (255),
    county3 varchar (255),
    county4 varchar (255),
    office varchar (10) NOT NULL,
    portrait varchar (255) NOT NULL,
    profilepage varchar (255) NOT NULL,
    facebook varchar (255),
    twitter varchar (255),
    sponsor boolean DEFAULT FALSE,
    committee varchar (255),
    leadership varchar (255),	
	PRIMARY KEY (id)
);

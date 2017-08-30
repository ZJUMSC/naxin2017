# MySQL Database initial script.

# delete database if exists manually.

CREATE DATABASE naxin2017;

USE naxin2017;

CREATE TABLE photo(
    _id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id char(10) NOT NULL,
    name char(20) NOT NULL,
    photo text
);

CREATE TABLE submit(
    _id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id char(10) NOT NULL,
    name varchar(20) NOT NULL,
    TG boolean,
    CG boolean,
    PG boolean,
    OG boolean,
    gender boolean,
    age smallint,
    grade smallint,
    campus smallint,
    major varchar(50),
    tel varchar(20),
    email varchar(50),
    qq varchar(15),
    description text
);

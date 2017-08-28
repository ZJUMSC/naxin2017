# MySQL Database initial script.

# delete database if exists manually.

CREATE DATABASE naxin2017;

USE naxin2017;

CREATE TABLE register(
    id char(10) PRIMARY KEY NOT NULL,
    name char(20) PRIMARY KEY NOT NULL
)

CREATE TABLE submit(
    id char(10) PRIMARY KEY NOT NULL,
    name varchar(20) PRIMARY KEY NOT NULL,
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

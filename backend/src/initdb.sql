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
    name char(20) PRIMARY KEY NOT NULL,
    TG boolean,
    CG boolean,
    PG boolean,
    OG boolean
);

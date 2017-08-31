/*
 * config of naxin2017 app backend
 * for dev && test env.
 */

const port: number = 8082;

const mysql = {
    databaseName: "naxin2017",
    username: "root",
    password: "",
}

const admin = {
    username: "admin123",
    password: "qwertgfdsa",
}

export { port, mysql, admin };

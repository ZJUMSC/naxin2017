import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import * as Sequelize from 'sequelize';

const cors = require('koa2-cors');

import { admin, port, mysql } from './config';

const db = new Sequelize(mysql.databaseName, mysql.username, mysql.password, {
    host: 'localhost',
    dialect: 'mysql'
});

db.authenticate().then(() => {
    console.log('database authenticated successfully');
}).catch(err => {
    console.log('database connection and authentication error:');
    console.log(err);
});

const submitTable = db.define('submit', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id: Sequelize.CHAR(10),
    name: Sequelize.STRING(20),
    TG: Sequelize.BOOLEAN,
    CG: Sequelize.BOOLEAN,
    PG: Sequelize.BOOLEAN,
    OG: Sequelize.BOOLEAN,
    gender: Sequelize.BOOLEAN,
    age: Sequelize.INTEGER,
    grade: Sequelize.INTEGER,
    campus: Sequelize.INTEGER,
    major: Sequelize.STRING(50),
    tel: Sequelize.STRING(20),
    email: Sequelize.STRING(50),
    qq: Sequelize.STRING(15),
    description: Sequelize.TEXT
}, {
    timestamps: false,
    tableName: 'submit'
});

interface ResBody {
    success: boolean;
}

class AllResBody implements ResBody {
    success: boolean;
    body: any;
}

class SubmitResBody implements ResBody {
    success: boolean;
}

const app = new Koa();
const router = new Router();

router.get('/hello', async (ctx, next) => {
    ctx.response.body = 'naxin2017 API';
    await next();
});

router.post('/all', async (ctx, next) => {
    const name = ctx.request.body.username || '';
    const pass = ctx.request.body.password || '';

    const res = new AllResBody();
    if (name === admin.username && pass === admin.password) {
        res.success = true;
        res.body = 'not implemented';
    } else {
        res.success = false;
        res.body = 'authorization failed';
    }

    ctx.status = 200;
    ctx.response.body = JSON.stringify(res);

    await next();
});

router.post('/submit', async (ctx, next) => {
    const body = ctx.request.body;
    console.log(body);

    if (body.group.some((v: any) => v === "TG")) {
        body.TG = true;
    }
    if (body.group.some((v: any) => v === "CG")) {
        body.CG = true;
    }
    if (body.group.some((v: any) => v === "PG")) {
        body.PG = true;
    }
    if (body.group.some((v: any) => v === "OG")) {
        body.OG = true;
    }

    await submitTable.create(body);

    const res = new SubmitResBody();
    res.success = true;
    ctx.status = 200;
    ctx.response.body = JSON.stringify(res);

    await next();
});

app.use(async (ctx, next) => {
    console.log(`query received: ${ctx.method} ${ctx.url}`);
    await next();
})

app.use(cors({
    origin: (ctx: any) => {
            return "*";
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

app.use(bodyParser());

app.use(router.routes());

app.use(async (ctx, next) => {
    console.log(ctx);
    console.log(ctx.response.body);
    await next();
});

app.listen(port);
console.log('listening at port ' + port + ' ...');

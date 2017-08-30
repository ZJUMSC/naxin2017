import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import * as Sequelize from 'sequelize';

const cors = require('koa2-cors');

import { admin, port, mysql } from './config';

const db = new Sequelize(mysql.databaseName, mysql.username, mysql.password);

interface ResBody {
    success: boolean;
}

class AllResBody implements ResBody {
    success: boolean;
    body: any;
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

    let res = new AllResBody();
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

app.use(async (ctx, next) => {
    console.log(`query received: ${ctx.method} ${ctx.url}`);
    await next();
})

app.use(cors());

app.use(bodyParser());

app.use(router.routes());

app.use(async (ctx, next) => {
    console.log(ctx);
    console.log(ctx.response.body);
    await next();
});

app.listen(port);
console.log('listening at port ' + port + ' ...');

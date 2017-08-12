import * as Koa from 'koa';
import * as http from 'http';

const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello World!';
});

app.listen(3000);

import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as http from 'http';

const app = new Koa();
const router = new Router();

router.get('/hello', async (ctx, next) => {
    ctx.response.body = 'Hello Koa2!';
    await next();
});

app.use(router.routes());

app.listen(3000);
console.log('listening at port 3000 ...')

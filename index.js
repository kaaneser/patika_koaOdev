const Koa = require('koa');
const KoaRouter = require('koa-router');
const render = require('koa-ejs');
const path = require('path');

const app = new Koa();
const router = new KoaRouter();

render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false
});

router.get('/', async ctx => {
    await ctx.render('index');
});

router.get ('/hakkimda', async ctx => {
    await ctx.render('about');
});

router.get ('/iletisim', async ctx => {
    await ctx.render('contact');
});

app.use(router.routes()).use(router.allowedMethods);

const port = 3000;

app.listen(port, () => {
    console.log(`Server started at ${port} port`);
});
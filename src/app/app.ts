import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as Router from 'koa-router'
import * as cors from '@koa/cors'

//
const app = new Koa()
const router = new Router()

router.get('/', (ctx: Koa.Context) => {
  ctx.body = { message: 'Hello World' }
})

app.use(cors({
  // origin: '*'
}))
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

//
export default app

/*
*
*/
app.on('error', (err: any, ctx: Koa.Context) => {
  console.error(err)
})

process.on('unhandledRejection', error => {
  console.error('unhandledRejection', error)
  process.exit(1)
})

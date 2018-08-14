import * as Koa from 'koa'
import { injectRoutingController } from './routing'

//
const app = new Koa()

//
injectRoutingController(app)

//
export default app

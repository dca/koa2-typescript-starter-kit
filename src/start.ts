
import * as Koa from 'koa'
import app from './app/app'
import { initDatabase } from './app/database'
import * as Debug from 'debug'
const debug = Debug('app:start')
//
const onServerStartError = (error: any) => {
  console.error('error')
  console.error(error)
  process.exit(1)
}

const srartServer = async (app: Koa) => {
  const port = process.env.PORT || 5555

  // dosomething before server start
  await initDatabase()

  return app.listen(port, () => console.log(`Listening API Server on port ${port}`))
}

;(srartServer)(app).catch(onServerStartError)

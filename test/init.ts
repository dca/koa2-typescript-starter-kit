import * as supertest from 'supertest'
import app from '@src/app/app'
import { initDatabase } from '@src/app/database'
import { getConnection } from 'typeorm'
import * as debug from 'debug'

const server = app.listen()
const request = () => supertest(server)

/**
 * init before test
 */
beforeAll(done => {
  // dosomething
  initDatabase().then(() => {
    debug('test:beforehook')('db ok')
    done()
  })
})

/**
 * close server after test
 */
afterAll(done => {
  server.close()

  getConnection().close()
    .then(() => { done() })
    .catch((err: any) => {
      debug('test:afterhook')('db closed')
      throw err
    })
})

export { request }

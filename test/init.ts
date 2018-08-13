import * as supertest from 'supertest'
import app from 'src/app/app'

const server = app.listen()
const request = () => supertest(server)

/**
 * init before test
 */
beforeAll(done => {
  // dosomething
  done()
})

/**
 * close server after test
 */
afterAll(done => {
  server.close()
  // dosomething
  done()
})

export { request }

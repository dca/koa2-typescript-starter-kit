import { request } from 'test/init'
import * as Debug from 'debug'
const debug = Debug('test:api:index')

describe('GET /', () => {
  it('it should return 200', async () => {
    let response = await request().get('/')

    debug('index %j', response.body)
    expect(response.status).toBe(200)
  })
})

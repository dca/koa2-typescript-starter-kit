import { request } from '../init'
import * as Debug from 'debug'
const debug = Debug('test:api:index')

describe('GET /v1/users', () => {
  it('it should return 200', async () => {
    let response = await request().get('/v1/users')

    debug('index %j', response.body)
    expect(response.status).toBe(200)
  })
})

import { request } from '@test/init'
import * as Debug from 'debug'
const debug = Debug('test:api:index')

describe('POST /v1/users', () => {
  it('should return 400 BadRequestError if send a fake email', async () => {
    let response = await request().post('/v1/users')
      .send({
        email: 'fake_email',
        password: 'abc123'
      })

    debug('user %j', response.body)
    expect(response.status).toBe(400)
    expect(response.body.name).toBe('BadRequestError')
  })
})

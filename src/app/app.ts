import { Container } from 'typedi'
import { createKoaServer, useContainer } from 'routing-controllers'
import { UsersController } from './controller/UsersController'

useContainer(Container)

const app = createKoaServer({
  controllers: [
    UsersController
  ]
})

//
export default app

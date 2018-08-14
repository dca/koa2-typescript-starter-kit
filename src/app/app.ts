import { Container } from 'typedi'
import { createKoaServer, useContainer } from 'routing-controllers'
import { UsersController } from '@src/app/controller/UsersController'

useContainer(Container)

const app = createKoaServer({
  controllers: [
    UsersController
  ]
})

//
export default app

import { Container } from 'typedi'
import { createKoaServer, useContainer } from 'routing-controllers'
import { UsersController } from './controller/UsersController'
import { initDatabase } from './database'

useContainer(Container)

initDatabase()

const app = createKoaServer({
  controllers: [
    UsersController
  ]
})

//
export default app

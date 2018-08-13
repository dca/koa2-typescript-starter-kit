import 'reflect-metadata'
import { getConnectionOptions, createConnection, useContainer } from 'typeorm'
import { Container } from 'typedi'
import * as config from 'config'

export const initDatabase = async () => {

  //
  useContainer(Container)

  // get config from config
  const connectionOptions = await getConnectionOptions()

  // create connection
  const connection = await createConnection(Object.assign(connectionOptions, {
    type: config.get('database.type'),
    host: config.get('database.host'),
    port: config.get('database.port'),
    username: config.get('database.username'),
    password: config.get('database.password'),
    database: config.get('database.database')
  }))

  return connection
}

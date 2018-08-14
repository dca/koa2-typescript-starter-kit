import { Container } from 'typedi'
import { useContainer, useKoaServer } from 'routing-controllers'

export const injectRoutingController = async (app: any) => {

  //
  useContainer(Container)

  useKoaServer(app, {
    controllers: [__dirname + '/controllers/**/*Controller.ts']
  })

}

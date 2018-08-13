import { Get, JsonController, Param, QueryParams } from 'routing-controllers'
import { Inject, Service } from 'typedi'
import { IsNumberString, IsIn, IsString } from 'class-validator'
import { UserService } from '../../../src/service/UserService'
import { User } from '../../../src/entity/User'

export class UserQuery {
  @IsNumberString() public limit: string = '20'
  @IsNumberString() public offset: string = '0'
}

@Service()
@JsonController('/v1/users')
export class UsersController {

  @Inject()
  private userService: UserService

  @Get('/')
  public async index (@QueryParams() query: UserQuery): Promise<{ data: [User[], number]; }> {
    const data = await this.userService.list(Number.parseInt(query.offset, 10), Number.parseInt(query.limit, 10))
    return {
      data
    }
  }
}

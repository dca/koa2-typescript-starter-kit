import { Get, JsonController, Param, QueryParams, Post, Body } from 'routing-controllers'
import { Inject, Service } from 'typedi'
import { IsNumberString, IsEmail, IsString } from 'class-validator'
import { UserService } from '../../../src/service/UserService'
import { User } from '../../../src/entity/User'

export class UserQuery {
  @IsNumberString() public limit: string = '20'
  @IsNumberString() public offset: string = '0'
}

export class UserBody {
  @IsEmail()
  public email: string

  @IsString()
  public password: string
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

  @Post('/')
  public async post (@Body() data: UserBody): Promise<{ data: User }> {
    const user = await this.userService.create(data)
    return { data: user }
  }
}

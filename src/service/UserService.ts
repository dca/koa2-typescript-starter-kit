import { Service } from 'typedi'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { User } from '../../src/entity/User'
import { UserRepository } from '../../src/repository/UserRepository'

@Service()
export class UserService {

  @InjectRepository(UserRepository)
  private userRepository: UserRepository

  public async list (offset: number, limit: number): Promise<[User[], number]> {
    return this.userRepository.getList(offset, limit)
  }
}

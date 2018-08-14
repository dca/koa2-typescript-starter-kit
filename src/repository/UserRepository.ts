import { Service } from 'typedi'
import { EntityRepository, Repository, Connection } from 'typeorm'
import { User } from '@src/entity/User'
import { InjectConnection } from 'typeorm-typedi-extensions'

@Service()
@EntityRepository(User)
export class UserRepository extends Repository<User> {

  @InjectConnection()
  private connection: Connection

  public getList (offset: number, limit: number): Promise<[User[], number]> {
    return this.createQueryBuilder('user')
               .offset(offset)
               .limit(limit)
               .getManyAndCount()
  }
}

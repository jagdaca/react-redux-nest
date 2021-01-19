import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findByUsername(username: string): Promise<any | undefined> {
    return this.usersRepository.findOne({ username });
  }

  async createUser(user: User): Promise<any> {
    return this.findByUsername(user.username).then( existUser => {
      if(existUser) {
        throw new NotAcceptableException("Username already taken");
      }
      return this.usersRepository.save(user);
    });
  }

}
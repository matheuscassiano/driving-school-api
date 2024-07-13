import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { UserFiltersDto } from './dtos/user-filters.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(filters: UserFiltersDto) {
    return await this.userRepository.find({
      where: {
        name: filters.name ? Like(`%${filters.name}%`) : undefined,
      },
    });
  }

  async findOne(id: number) {
    return await this.userRepository.findOneBy({ id });
  }

  async create(createData: any) {
    try {
      const user = await this.userRepository.save(createData);
      return { user, message: 'Usuário cadastrado com sucesso!' };
    } catch (_) {
      throw new HttpException(
        { message: 'Não foi possível cadastrar o usuário.' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

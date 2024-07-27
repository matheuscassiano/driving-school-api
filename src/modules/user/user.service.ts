import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Like, Repository } from 'typeorm';
import { UserFiltersDto } from './dtos/user-filters.dto';
import { User } from './entities/user.entity';
import { UserDto } from './dtos/user.dto';

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

  async create(createData: UserDto) {
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

  async update(id: number, updateData: UserDto) {
    try {
      const user = await this.userRepository.findOneBy({ id });
      if (!user) {
        throw new HttpException(
          { message: 'Usuário não encontrado.' },
          HttpStatus.NOT_FOUND,
        );
      }
      await this.userRepository.update(id, updateData);
      return { user, message: 'Usuário atualizado com sucesso!' };
    } catch (_) {
      throw new HttpException(
        { message: 'Não foi possível atualizar o usuário.' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async delete(id: number) {
    try {
      const user = await this.userRepository.findOneBy({ id });
      if (!user) {
        throw new HttpException(
          { message: 'Usuário não encontrado.' },
          HttpStatus.NOT_FOUND,
        );
      }
      await this.userRepository.softDelete(id);
      return { user, message: 'Usuário deletado com sucesso!' };
    } catch (_) {
      throw new HttpException(
        { message: 'Não foi possível deletar o usuário.' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async exists(filter: FindOptionsWhere<UserDto>): Promise<boolean> {
    try {
      return this.userRepository.exist({
        where: { ...filter, deletedAt: null },
      });
    } catch (error) {
      throw new HttpException(
        {
          message:
            'Não foi possível verificar se já existe um usuário com este CPF.',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

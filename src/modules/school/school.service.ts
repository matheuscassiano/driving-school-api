import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { SchoolDto } from './dtos/school.dto';
import { School } from './entities/school.entity';

@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(School)
    private readonly schoolRepository: Repository<School>,
  ) {}

  // async findAll(filters: UserFiltersDto) {
  //   return await this.userRepository.find({
  //     where: {
  //       name: filters.name ? Like(`%${filters.name}%`) : undefined,
  //     },
  //   });
  // }

  async findAll() {
    return await this.schoolRepository.find();
  }

  async findOne(id: number) {
    return await this.schoolRepository.findOneBy({ id });
  }

  async create(createData: SchoolDto) {
    try {
      const school = await this.schoolRepository.save(createData);
      return { school, message: 'Escola cadastrada com sucesso!' };
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível cadastrar a escola.' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: number, updateData: SchoolDto) {
    try {
      const currentSchool = await this.findOne(id);
      if (!currentSchool) {
        throw new HttpException(
          { message: 'Escola não encontrada.' },
          HttpStatus.NOT_FOUND,
        );
      }

      delete updateData.id;
      await this.schoolRepository.update(id, updateData);
      return { message: 'Escola atualizada com sucesso!' };
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível atualizar a escola.' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async delete(id: number) {
    try {
      const currentSchool = await this.findOne(id);
      if (!currentSchool) {
        throw new HttpException(
          { message: 'Escola não encontrada.' },
          HttpStatus.NOT_FOUND,
        );
      }

      await this.schoolRepository.softDelete(id);
      return { message: 'Escola deletada com sucesso!' };
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível deletar a escola.' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async exists(filter: FindOptionsWhere<School>): Promise<boolean> {
    try {
      return this.schoolRepository.exist({
        where: { ...filter, deletedAt: null },
      });
    } catch (error) {
      throw new HttpException(
        {
          message:
            'Não foi possível verificar se já existe uma escola com CNPJ.',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

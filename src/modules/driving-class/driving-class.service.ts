import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DrivingClassDto } from './dtos/driving-class.dto';
import { DrivingClass } from './entities/driving-class.entity';

@Injectable()
export class DrivingClassService {
  constructor(
    @InjectRepository(DrivingClass)
    private readonly drivingClassRepository: Repository<DrivingClass>,
  ) {}

  // async findAll(filters: CreateDrivingClassDto) {
  //   return await this.vehicleRepository.find({
  //     where: {
  //       name: filters.name ? Like(`%${filters.name}%`) : undefined,
  //     },
  //   });
  // }

  async findAll() {
    return await this.drivingClassRepository.find({
      relations: {
        teacher: true,
        course: true,
        vehicle: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.drivingClassRepository.findOneBy({ id });
  }

  async create(createData: DrivingClassDto) {
    try {
      const user = await this.drivingClassRepository.save(createData);
      return { user, message: 'Aula cadastrada com sucesso!' };
    } catch (_) {
      throw new HttpException(
        { message: 'Não foi possível cadastrar a aula.' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: number, updateData: DrivingClassDto) {
    try {
      const user = await this.drivingClassRepository.findOneBy({ id });
      if (!user) {
        throw new HttpException(
          { message: 'Aula não encontrada.' },
          HttpStatus.NOT_FOUND,
        );
      }
      await this.drivingClassRepository.update(id, updateData);
      return { user, message: 'Aula atualizada com sucesso!' };
    } catch (_) {
      throw new HttpException(
        { message: 'Não foi possível atualizar a aula.' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async delete(id: number) {
    try {
      const user = await this.drivingClassRepository.findOneBy({ id });
      if (!user) {
        throw new HttpException(
          { message: 'Aula não encontrada.' },
          HttpStatus.NOT_FOUND,
        );
      }
      await this.drivingClassRepository.softDelete(id);
      return { user, message: 'Aula deletada com sucesso!' };
    } catch (_) {
      throw new HttpException(
        { message: 'Não foi possível deletar a aula.' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

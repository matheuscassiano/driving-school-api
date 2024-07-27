import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseDto } from './dtos/course.dto';
import { Course } from './entities/course.entity';
import { DrivingClass } from '../driving-class/entities/driving-class.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,

    @InjectRepository(DrivingClass)
    private readonly drivingClassRepository: Repository<DrivingClass>,
  ) {}

  // async findAll(filters: CourseDto) {
  //   return await this.courseRepository.find({
  //     where: {
  //       name: filters.name ? Like(`%${filters.name}%`) : undefined,
  //     },
  //   });
  // }

  async findAll() {
    return await this.courseRepository.find();
  }

  async findOne(id: number) {
    return await this.courseRepository.findOneBy({ id });
  }

  async create(createData: CourseDto) {
    try {
      const user = await this.courseRepository.save(createData);
      return { user, message: 'Curso cadastrado com sucesso!' };
    } catch (_) {
      throw new HttpException(
        { message: 'Não foi possível cadastrar o curso.' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: number, updateData: CourseDto) {
    try {
      const user = await this.courseRepository.findOneBy({ id });
      if (!user) {
        throw new HttpException(
          { message: 'Curso não encontrado.' },
          HttpStatus.NOT_FOUND,
        );
      }
      await this.courseRepository.update(id, updateData);
      return { user, message: 'Curso atualizado com sucesso!' };
    } catch (_) {
      throw new HttpException(
        { message: 'Não foi possível atualizar o curso.' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async delete(id: number) {
    try {
      const user = await this.courseRepository.findOneBy({ id });
      if (!user) {
        throw new HttpException(
          { message: 'Curso não encontrado.' },
          HttpStatus.NOT_FOUND,
        );
      }
      await this.courseRepository.softDelete(id);
      return { user, message: 'Curso deletado com sucesso!' };
    } catch (_) {
      throw new HttpException(
        { message: 'Não foi possível deletar o curso.' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findLeasons(id: number) {
    return await this.drivingClassRepository.find({
      where: {
        course: { id },
      },
      relations: {
        teacher: true,
        vehicle: true,
      },
    });
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehicleDto } from './dtos/vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
  ) {}

  // async findAll(filters: VehicleDto) {
  //   return await this.vehicleRepository.find({
  //     where: {
  //       name: filters.name ? Like(`%${filters.name}%`) : undefined,
  //     },
  //   });
  // }

  async findAll() {
    return await this.vehicleRepository.find();
  }

  async findOne(id: number) {
    return await this.vehicleRepository.findOneBy({ id });
  }

  async create(createData: VehicleDto) {
    try {
      const user = await this.vehicleRepository.save(createData);
      return { user, message: 'Veículo cadastrado com sucesso!' };
    } catch (_) {
      throw new HttpException(
        { message: 'Não foi possível cadastrar o veículo.' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: number, updateData: VehicleDto) {
    try {
      const user = await this.vehicleRepository.findOneBy({ id });
      if (!user) {
        throw new HttpException(
          { message: 'Veículo não encontrado.' },
          HttpStatus.NOT_FOUND,
        );
      }
      await this.vehicleRepository.update(id, updateData);
      return { user, message: 'Veículo atualizado com sucesso!' };
    } catch (_) {
      throw new HttpException(
        { message: 'Não foi possível atualizar o veículo.' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async delete(id: number) {
    try {
      const user = await this.vehicleRepository.findOneBy({ id });
      if (!user) {
        throw new HttpException(
          { message: 'Veículo não encontrado.' },
          HttpStatus.NOT_FOUND,
        );
      }
      await this.vehicleRepository.softDelete(id);
      return { user, message: 'Veículo deletado com sucesso!' };
    } catch (_) {
      throw new HttpException(
        { message: 'Não foi possível deletar o veículo.' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

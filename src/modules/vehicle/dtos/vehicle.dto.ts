import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsOptional } from 'class-validator';
import { VehicleCategory } from '../enums/vehicle-model.enum';
import { VehicleStatus } from '../enums/vehicle-status.enum';
import { VehicleType } from '../enums/vehicle-type.enum';

export class VehicleDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O campo ano não pode ser vazio.' })
  @IsDefined({ message: 'O campo ano precisa ser definido.' })
  year: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo cor não pode ser vazio.' })
  @IsDefined({ message: 'O campo cor precisa ser definido.' })
  color: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo placa não pode ser vazio.' })
  @IsDefined({ message: 'O campo placa precisa ser definido.' })
  plate: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo marca não pode ser vazio.' })
  @IsDefined({ message: 'O campo marca precisa ser definido.' })
  brand: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo modelo não pode ser vazio.' })
  @IsDefined({ message: 'O campo modelo precisa ser definido.' })
  model: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo imagem não pode ser vazio.' })
  @IsOptional()
  picture?: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo category não pode ser vazio.' })
  @IsDefined({ message: 'O campo category precisa ser definido.' })
  category: VehicleCategory;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo tipo não pode ser vazio.' })
  @IsDefined({ message: 'O campo tipo precisa ser definido.' })
  type: VehicleType;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo status não pode ser vazio.' })
  @IsDefined({ message: 'O campo status precisa ser definido.' })
  status: VehicleStatus;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo escola não pode ser vazio.' })
  @IsDefined({ message: 'O campo escola precisa ser definido.' })
  schoolId: number;
}

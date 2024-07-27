import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsOptional } from 'class-validator';
import { DrivingClassStatus } from '../enums/driving-class-status.enum';
import { DrivingClassType } from '../enums/driving-class-type.enum';

export class DrivingClassDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio.' })
  @IsDefined({ message: 'O campo nome precisa ser definido.' })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo descrição não pode ser vazio.' })
  @IsDefined({ message: 'O campo descrição precisa ser definido.' })
  description: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo duração não pode ser vazio.' })
  @IsDefined({ message: 'O campo duração precisa ser definido.' })
  duration: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo localização não pode ser vazio.' })
  @IsDefined({ message: 'O campo localização precisa ser definido.' })
  location: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo data não pode ser vazio.' })
  @IsDefined({ message: 'O campo data precisa ser definido.' })
  date: Date;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo tipo não pode ser vazio.' })
  @IsDefined({ message: 'O campo tipo precisa ser definido.' })
  type: DrivingClassType;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo status não pode ser vazio.' })
  @IsOptional()
  status?: DrivingClassStatus;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo professor não pode ser vazio.' })
  @IsDefined({ message: 'O campo professor precisa ser definido.' })
  teacherId: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo curso não pode ser vazio.' })
  @IsDefined({ message: 'O campo curso precisa ser definido.' })
  courseId: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo veículo não pode ser vazio.' })
  @IsOptional()
  vehicleId?: number;
}

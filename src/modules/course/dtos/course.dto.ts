import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty } from 'class-validator';

export class CourseDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio.' })
  @IsDefined({ message: 'O campo nome precisa ser definido.' })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo descrição não pode ser vazio.' })
  @IsDefined({ message: 'O campo descrição precisa ser definido.' })
  description: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo data de início não pode ser vazio.' })
  @IsDefined({ message: 'O campo data de início precisa ser definido.' })
  startDate: Date;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo data de fim não pode ser vazio.' })
  @IsDefined({ message: 'O campo data de fim precisa ser definido.' })
  endDate: Date;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo ativo não pode ser vazio.' })
  @IsDefined({ message: 'O campo ativo precisa ser definido.' })
  isActive: boolean;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo escola não pode ser vazio.' })
  @IsDefined({ message: 'O campo escola precisa ser definido.' })
  schoolId: number;
}

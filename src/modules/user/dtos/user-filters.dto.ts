import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UserFiltersDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O campo name não pode ser vazio.' })
  @IsOptional()
  name: string;
}

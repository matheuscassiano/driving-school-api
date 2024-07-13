import { IsNotEmpty, IsOptional } from 'class-validator';

export class UserFiltersDto {
  @IsNotEmpty({ message: 'O campo name não pode ser vazio.' })
  @IsOptional()
  name: string;
}

import { IsDefined, IsNotEmpty, IsOptional, Validate } from 'class-validator';
import { UserType } from '../enums/user-type.enum';
import { UserDocumentAlreadyExistsConstraint } from '../validates/document-exist.constraint';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O campo id não pode ser vazio.' })
  @IsOptional()
  id?: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio.' })
  @IsDefined({ message: 'O campo nome precisa ser definido.' })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo email não pode ser vazio.' })
  @IsDefined({ message: 'O campo email precisa ser definido.' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo senha não pode ser vazio.' })
  @IsDefined({ message: 'O campo senha precisa ser definido.' })
  password: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo telefone não pode ser vazio.' })
  @IsDefined({ message: 'O campo telefone precisa ser definido.' })
  phone: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo CPF não pode ser vazio.' })
  @IsDefined({ message: 'O campo CPF precisa ser definido.' })
  @Validate(UserDocumentAlreadyExistsConstraint, {
    message: 'Já existe uma empresa com esse CPF.',
  })
  document: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo imagem não pode ser vazio.' })
  @IsDefined({ message: 'O campo imagem precisa ser definido.' })
  picture: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo tipo não pode ser vazio.' })
  @IsDefined({ message: 'O campo tipo precisa ser definido.' })
  type: UserType;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo escola não pode ser vazio.' })
  @IsOptional()
  schoolId?: number;
}

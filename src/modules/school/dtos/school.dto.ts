import {
  Allow,
  IsDefined,
  IsNotEmpty,
  IsOptional,
  Validate,
} from 'class-validator';
import { SchoolDocumentAlreadyExistsConstraint } from '../validates/document-exist.constraint';
import { ApiProperty } from '@nestjs/swagger';

export class SchoolDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O campo id não pode ser vazio.' })
  @IsOptional()
  id?: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio.' })
  @IsDefined({ message: 'O campo nome precisa ser definido.' })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo descrição não pode ser vazio.' })
  @IsDefined({ message: 'O campo descrição precisa ser definido.' })
  description: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo CNPJ não pode ser vazio.' })
  @IsDefined({ message: 'O campo CNPJ precisa ser definido.' })
  @Validate(SchoolDocumentAlreadyExistsConstraint, {
    message: 'Já existe uma empresa com esse CNPJ.',
  })
  document: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo telefone não pode ser vazio.' })
  @IsDefined({ message: 'O campo telefone precisa ser definido.' })
  phone: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo email não pode ser vazio.' })
  @IsDefined({ message: 'O campo email precisa ser definido.' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo endereço não pode ser vazio.' })
  @IsDefined({ message: 'O campo endereço precisa ser definido.' })
  location: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo dono não pode ser vazio.' })
  @IsDefined({ message: 'O campo dono precisa ser definido.' })
  ownerId: number;

  @Allow()
  context?: {
    params: { id: number };
  };
}

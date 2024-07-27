import { OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

import { Not } from 'typeorm';
import { UserService } from '../user.service';
import { UserDto } from '../dtos/user.dto';

let service: UserService;

@ValidatorConstraint({
  name: 'UserDocumentAlreadyExistsConstraint',
  async: true,
})
export class UserDocumentAlreadyExistsConstraint
  implements ValidatorConstraintInterface, OnModuleInit
{
  constructor(private readonly moduleRef: ModuleRef) {}

  onModuleInit(): void {
    service = this.moduleRef.get(UserService);
  }

  async validate(
    document: string,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const body: UserDto = Object.assign(validationArguments.object);

    const companyExists = await service.exists({
      document,
      id: Not(body?.id || 0),
    });

    return !companyExists;
  }
}

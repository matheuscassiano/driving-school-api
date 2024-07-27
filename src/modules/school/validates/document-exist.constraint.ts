import { OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

import { Not } from 'typeorm';
import { SchoolService } from '../school.service';
import { SchoolDto } from '../dtos/school.dto';

let service: SchoolService;

@ValidatorConstraint({
  name: 'SchoolDocumentAlreadyExistsConstraint',
  async: true,
})
export class SchoolDocumentAlreadyExistsConstraint
  implements ValidatorConstraintInterface, OnModuleInit
{
  constructor(private readonly moduleRef: ModuleRef) {}

  onModuleInit(): void {
    service = this.moduleRef.get(SchoolService);
  }

  async validate(
    document: string,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const body: SchoolDto = Object.assign(validationArguments.object);

    const companyExists = await service.exists({
      document,
      id: Not(body?.id || 0),
    });

    return !companyExists;
  }
}

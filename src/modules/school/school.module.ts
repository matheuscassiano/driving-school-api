import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { School } from './entities/school.entity';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';
import { SchoolDocumentAlreadyExistsConstraint } from './validates/document-exist.constraint';

@Module({
  imports: [TypeOrmModule.forFeature([School])],
  providers: [SchoolService, SchoolDocumentAlreadyExistsConstraint],
  controllers: [SchoolController],
})
export class SchoolModule {}

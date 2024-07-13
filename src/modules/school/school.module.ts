import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { School } from './entities/school.entity';

@Module({
  imports: [TypeOrmModule.forFeature([School])],
  providers: [],
  controllers: [],
})
export class SchoolModule {}

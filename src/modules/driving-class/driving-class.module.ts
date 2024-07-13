import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DrivingClass } from './entities/driving-class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DrivingClass])],
  providers: [],
  controllers: [],
})
export class DrivingClassModule {}

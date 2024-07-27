import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DrivingClassService } from './driving-class.service';
import { DrivingClass } from './entities/driving-class.entity';
import { DrivingClassController } from './driving-class.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DrivingClass])],
  providers: [DrivingClassService],
  controllers: [DrivingClassController],
})
export class DrivingClassModule {}

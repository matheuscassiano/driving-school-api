import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { Course } from './entities/course.entity';
import { DrivingClass } from '../driving-class/entities/driving-class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, DrivingClass])],
  providers: [CourseService],
  controllers: [CourseController],
})
export class CourseModule {}

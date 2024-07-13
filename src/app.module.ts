import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { SchoolModule } from './modules/school/school.module';
import { UserModule } from './modules/user/user.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { DrivingClassModule } from './modules/driving-class/driving-class.module';
import { CourseModule } from './modules/course/course.module';

@Module({
  imports: [
    DatabaseModule,
    SchoolModule,
    UserModule,
    VehicleModule,
    DrivingClassModule,
    CourseModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

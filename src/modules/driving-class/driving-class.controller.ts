import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DrivingClassService } from './driving-class.service';
import { DrivingClassDto } from './dtos/driving-class.dto';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
)
@Controller('driving-class')
export class DrivingClassController {
  constructor(private readonly drivingClassService: DrivingClassService) {}

  // @Get()
  // async findAll(@Query() userFiltersDto: DrivingClassDto) {
  //   return await this.userService.findAll(userFiltersDto);
  // }

  @Get()
  async findAll() {
    return await this.drivingClassService.findAll();
  }

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number) {
    return await this.drivingClassService.findOne(id);
  }

  @Post()
  async create(@Body() createData: DrivingClassDto) {
    return await this.drivingClassService.create(createData);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: DrivingClassDto,
  ) {
    return await this.drivingClassService.update(id, updateData);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.drivingClassService.delete(id);
  }
}

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
import { VehicleDto } from './dtos/vehicle.dto';
import { VehicleService } from './vehicle.service';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
)
@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  // @Get()
  // async findAll(@Query() userFiltersDto: VehicleDto) {
  //   return await this.userService.findAll(userFiltersDto);
  // }

  @Get()
  async findAll() {
    return await this.vehicleService.findAll();
  }

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number) {
    return await this.vehicleService.findOne(id);
  }

  @Post()
  async create(@Body() createData: VehicleDto) {
    return await this.vehicleService.create(createData);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: VehicleDto,
  ) {
    return await this.vehicleService.update(id, updateData);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.vehicleService.delete(id);
  }
}

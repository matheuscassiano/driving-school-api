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
import { SchoolDto } from './dtos/school.dto';
import { SchoolService } from './school.service';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
)
@Controller('schools')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  // @Get()
  // async findAll(@Query() userFiltersDto: UserFiltersDto) {
  //   return await this.schoolService.findAll(userFiltersDto);
  // }

  @Get()
  async findAll() {
    return await this.schoolService.findAll();
  }

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number) {
    return await this.schoolService.findOne(id);
  }

  @Post()
  async create(@Body() createData: SchoolDto) {
    return await this.schoolService.create(createData);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: SchoolDto,
  ) {
    return await this.schoolService.update(id, updateData);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.schoolService.delete(id);
  }
}

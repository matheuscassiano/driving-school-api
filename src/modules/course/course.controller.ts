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
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { CourseService } from './course.service';
import { CourseDto } from './dtos/course.dto';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
)
@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  // @Get()
  // async findAll(@Query() userFiltersDto: CourseDto) {
  //   return await this.userService.findAll(userFiltersDto);
  // }

  @Get()
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findAll() {
    return await this.courseService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async find(@Param('id', ParseIntPipe) id: number) {
    return await this.courseService.findOne(id);
  }

  @Post()
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({ type: CourseDto })
  async create(@Body() createData: CourseDto) {
    return await this.courseService.create(createData);
  }

  @Put(':id')
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({ type: CourseDto })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CourseDto,
  ) {
    return await this.courseService.update(id, updateData);
  }

  @Delete(':id')
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.courseService.delete(id);
  }

  @Get(':id/leasons')
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findLessons(@Param('id', ParseIntPipe) id: number) {
    return await this.courseService.findLeasons(id);
  }
}

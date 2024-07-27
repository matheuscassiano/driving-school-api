import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserFiltersDto } from './dtos/user-filters.dto';
import { UserService } from './user.service';
import { UserDto } from './dtos/user.dto';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(@Query() userFiltersDto: UserFiltersDto) {
    return await this.userService.findAll(userFiltersDto);
  }

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.findOne(id);
  }

  @Post()
  async create(@Body() createData: UserDto) {
    return await this.userService.create(createData);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: UserDto,
  ) {
    return await this.userService.update(id, updateData);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.delete(id);
  }
}

import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserFiltersDto } from './dtos/user-filters.dto';
import { UserService } from './user.service';

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
}

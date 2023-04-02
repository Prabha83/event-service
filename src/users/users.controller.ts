import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'User account created successfully',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const { name, email, description } = createUserDto;
    return this.usersService.create({ name, email, description });
  }

  @Get()
  @ApiOkResponse({ status: 200 })
  async findAll(): Promise<UserDto[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne({ id: +id });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const { name, email, description } = updateUserDto;
    return this.usersService.update({
      where: { id: +id },
      data: { name, email, description },
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<User> {
    return this.usersService.remove({ id: +id });
  }
}

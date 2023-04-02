import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateManyInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async findAll(): Promise<UserDto[]> {
    return this.prisma.user.findMany();
  }

  async findOne(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.findUnique({
      where,
    });
  }

  async update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateManyMutationInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({ where });
  }
}

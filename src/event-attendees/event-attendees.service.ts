import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { EventAttendee, Prisma } from '@prisma/client';

@Injectable()
export class EventAttendeesService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.EventAttendeeCreateManyInput,
  ): Promise<EventAttendee> {
    return this.prisma.eventAttendee.create({
      data,
    });
  }

  async findAll(): Promise<EventAttendee[]> {
    return this.prisma.eventAttendee.findMany();
  }

  async findOne(
    where: Prisma.EventAttendeeWhereUniqueInput,
  ): Promise<EventAttendee> {
    return this.prisma.eventAttendee.findUnique({
      where,
    });
  }

  async update(params: {
    where: Prisma.EventAttendeeWhereUniqueInput;
    data: Prisma.EventAttendeeUncheckedUpdateInput;
  }): Promise<EventAttendee> {
    const { where, data } = params;
    return this.prisma.eventAttendee.update({
      data,
      where,
    });
  }

  async remove(
    where: Prisma.EventAttendeeWhereUniqueInput,
  ): Promise<EventAttendee> {
    return this.prisma.eventAttendee.delete({ where });
  }
}

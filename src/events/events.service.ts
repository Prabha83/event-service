import { Injectable } from '@nestjs/common';
import { Event, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.EventCreateManyInput): Promise<Event> {
    return this.prisma.event.create({
      data,
    });
  }

  async findAll(): Promise<Event[]> {
    return this.prisma.event.findMany();
  }

  async findOne(eventType: Prisma.EventTypeWhereUniqueInput): Promise<Event> {
    return this.prisma.event.findUnique({
      where: eventType,
    });
  }

  async update(params: {
    where: Prisma.EventWhereUniqueInput;
    data: Prisma.EventUpdateManyMutationInput;
  }): Promise<Event> {
    const { where, data } = params;
    return this.prisma.event.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.EventWhereUniqueInput): Promise<Event> {
    return this.prisma.event.delete({ where });
  }
}

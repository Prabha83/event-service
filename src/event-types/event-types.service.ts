import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { EventType, Prisma } from '@prisma/client';

@Injectable()
export class EventTypesService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.EventTypeUncheckedCreateWithoutEventsInput,
  ): Promise<EventType> {
    return this.prisma.eventType.create({
      data,
    });
  }

  async findAll(): Promise<EventType[]> {
    return this.prisma.eventType.findMany();
  }

  async findOne(
    eventType: Prisma.EventTypeWhereUniqueInput,
  ): Promise<EventType> {
    return this.prisma.eventType.findUnique({
      where: eventType,
    });
  }

  async update(params: {
    where: Prisma.EventTypeWhereUniqueInput;
    data: Prisma.EventTypeUpdateWithoutEventsInput;
  }): Promise<EventType> {
    const { where, data } = params;
    return this.prisma.eventType.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.EventTypeWhereUniqueInput): Promise<EventType> {
    return this.prisma.eventType.delete({ where });
  }
}

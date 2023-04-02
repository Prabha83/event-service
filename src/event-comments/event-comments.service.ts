import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { EventComment, Prisma } from '@prisma/client';

@Injectable()
export class EventCommentsService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.EventCommentCreateManyInput,
  ): Promise<EventComment> {
    return this.prisma.eventComment.create({
      data,
    });
  }

  async findAll(): Promise<EventComment[]> {
    return this.prisma.eventComment.findMany();
  }

  async findOne(
    where: Prisma.EventCommentWhereUniqueInput,
  ): Promise<EventComment> {
    return this.prisma.eventComment.findUnique({
      where,
    });
  }

  async update(params: {
    where: Prisma.EventCommentWhereUniqueInput;
    data: Prisma.EventCommentUncheckedUpdateManyInput;
  }): Promise<EventComment> {
    const { where, data } = params;
    return this.prisma.eventComment.update({
      data,
      where,
    });
  }

  async remove(
    where: Prisma.EventCommentWhereUniqueInput,
  ): Promise<EventComment> {
    return this.prisma.eventComment.delete({ where });
  }
}

import { Module } from '@nestjs/common';
import { EventCommentsService } from './event-comments.service';
import { EventCommentsController } from './event-comments.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EventCommentsController],
  providers: [PrismaService, EventCommentsService],
})
export class EventCommentsModule {}

import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EventsController],
  providers: [PrismaService, EventsService],
})
export class EventsModule {}

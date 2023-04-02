import { Module } from '@nestjs/common';
import { EventAttendeesService } from './event-attendees.service';
import { EventAttendeesController } from './event-attendees.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EventAttendeesController],
  providers: [PrismaService, EventAttendeesService],
})
export class EventAttendeesModule {}

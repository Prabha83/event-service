import { Module } from '@nestjs/common';
import { EventTypesService } from './event-types.service';
import { EventTypesController } from './event-types.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EventTypesController],
  providers: [PrismaService, EventTypesService],
})
export class EventTypesModule {}

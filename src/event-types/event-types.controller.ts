import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EventTypesService } from './event-types.service';
import { CreateEventTypeDto } from './dto/create-event-type.dto';
import { UpdateEventTypeDto } from './dto/update-event-type.dto';
import { EventType } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('event-types')
@Controller('event-types')
export class EventTypesController {
  constructor(private readonly eventTypesService: EventTypesService) {}

  @Post()
  create(@Body() createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypesService.create({ name: createEventTypeDto.name });
  }

  @Get()
  async findAll(): Promise<EventType[]> {
    return this.eventTypesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.eventTypesService.findOne({ id: +id });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEventTypeDto: UpdateEventTypeDto,
  ) {
    return this.eventTypesService.update({
      where: { id: +id },
      data: { name: updateEventTypeDto.name, updatedAt: new Date() },
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.eventTypesService.remove({ id: +id });
  }
}

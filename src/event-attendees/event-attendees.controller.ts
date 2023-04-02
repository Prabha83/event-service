import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EventAttendeesService } from './event-attendees.service';
import { CreateEventAttendeeDto } from './dto/create-event-attendee.dto';
import { UpdateEventAttendeeDto } from './dto/update-event-attendee.dto';
import { ApiTags } from '@nestjs/swagger';
import { EventAttendee } from '@prisma/client';

@ApiTags('event-attendees')
@Controller('event-attendees')
export class EventAttendeesController {
  constructor(private readonly eventAttendeesService: EventAttendeesService) {}

  @Post()
  async create(
    @Body() createEventAttendeeDto: CreateEventAttendeeDto,
  ): Promise<EventAttendee> {
    return this.eventAttendeesService.create(createEventAttendeeDto);
  }

  @Get()
  async findAll(): Promise<EventAttendee[]> {
    return this.eventAttendeesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<EventAttendee> {
    return this.eventAttendeesService.findOne({ id: +id });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEventAttendeeDto: UpdateEventAttendeeDto,
  ): Promise<EventAttendee> {
    return this.eventAttendeesService.update({
      where: { id: +id },
      data: updateEventAttendeeDto,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<EventAttendee> {
    return this.eventAttendeesService.remove({ id: +id });
  }
}

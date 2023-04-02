import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from '@prisma/client';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  async create(@Body() createEventDto: CreateEventDto): Promise<Event> {
    return this.eventsService.create(createEventDto);
  }

  @ApiOkResponse()
  @Get()
  async findAll(): Promise<Event[]> {
    return this.eventsService.findAll();
  }

  @ApiOkResponse()
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Event> {
    return this.eventsService.findOne({ id: +id });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ): Promise<Event> {
    return this.eventsService.update({
      where: { id: +id },
      data: updateEventDto,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Event> {
    return this.eventsService.remove({ id: +id });
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EventCommentsService } from './event-comments.service';
import { CreateEventCommentDto } from './dto/create-event-comment.dto';
import { UpdateEventCommentDto } from './dto/update-event-comment.dto';
import { ApiTags } from '@nestjs/swagger';
import { EventComment } from '@prisma/client';

@ApiTags('event-comments')
@Controller('event-comments')
export class EventCommentsController {
  constructor(private readonly eventCommentsService: EventCommentsService) {}

  @Post()
  async create(
    @Body() createEventCommentDto: CreateEventCommentDto,
  ): Promise<EventComment> {
    return this.eventCommentsService.create(createEventCommentDto);
  }

  @Get()
  async findAll(): Promise<EventComment[]> {
    return this.eventCommentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<EventComment> {
    return this.eventCommentsService.findOne({ id: +id });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEventCommentDto: UpdateEventCommentDto,
  ): Promise<EventComment> {
    return this.eventCommentsService.update({
      where: { id: +id },
      data: updateEventCommentDto,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<EventComment> {
    return this.eventCommentsService.remove({ id: +id });
  }
}

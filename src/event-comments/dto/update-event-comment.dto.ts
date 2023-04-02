import { PartialType } from '@nestjs/swagger';
import { CreateEventCommentDto } from './create-event-comment.dto';

export class UpdateEventCommentDto extends PartialType(CreateEventCommentDto) {}

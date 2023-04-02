import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateEventCommentDto {
  @ApiProperty()
  event_Id: number;

  @ApiProperty()
  comment: string;

  @ApiPropertyOptional()
  user_Id?: number;
}

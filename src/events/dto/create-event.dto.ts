import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEventDto {
  @ApiProperty()
  @IsNotEmpty()
  event_name: string;

  @ApiProperty()
  @IsNotEmpty()
  event_description: string;

  @ApiProperty()
  @IsNumber()
  event_type_id: number;

  @ApiProperty()
  @IsNotEmpty()
  event_location: string;

  @ApiProperty()
  @IsDate()
  time_begin: Date;

  @ApiProperty()
  @IsDate()
  time_end: Date;
}

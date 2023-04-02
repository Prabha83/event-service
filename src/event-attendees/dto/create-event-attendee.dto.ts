import { ApiProperty } from '@nestjs/swagger';
import { Status } from '@prisma/client';

export class CreateEventAttendeeDto {
  @ApiProperty()
  user_Id: number;

  @ApiProperty()
  event_Id: number;

  @ApiProperty()
  status: Status;

  @ApiProperty()
  approved: boolean;

  @ApiProperty()
  attended: boolean;
}

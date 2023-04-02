import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Max, Min } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @Min(2)
  @Max(300)
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @Max(500)
  description: string;
}

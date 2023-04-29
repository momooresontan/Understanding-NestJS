/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, IsAlphanumeric } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(10)
  name: string;

  // @ApiProperty({ required: false })
  // age?: number;
}

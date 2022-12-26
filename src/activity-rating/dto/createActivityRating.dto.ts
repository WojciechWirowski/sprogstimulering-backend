import { ApiProperty } from '@nestjs/swagger';

export class CreateActivityRatingDto {
  @ApiProperty()
  activityId: number;

  @ApiProperty()
  value1: number;

  @ApiProperty()
  value2: number;

  @ApiProperty()
  value3: number;

  @ApiProperty()
  value4: number;

  @ApiProperty()
  value5: number;
}

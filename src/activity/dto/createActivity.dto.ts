import { ApiProperty } from '@nestjs/swagger';

export class CreateActivityDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  imagePath: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  category: number;
}

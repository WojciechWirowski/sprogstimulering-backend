import { ApiProperty } from '@nestjs/swagger';

export class UpdateActivityDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  imagePath: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  category: number;
}

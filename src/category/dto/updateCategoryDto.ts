import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  mainCatId: number;

  @ApiProperty()
  imagePath: string;

  @ApiProperty()
  name: string;
}

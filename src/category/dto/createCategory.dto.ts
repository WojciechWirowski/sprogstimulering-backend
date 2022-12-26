import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty()
  mainCatId: number;

  @ApiProperty()
  imagePath: string;

  @ApiProperty()
  name: string;
}

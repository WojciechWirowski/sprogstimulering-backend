import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/createCategory.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/create')
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  getAll() {
    return this.categoryService.getAll();
  }

  @Get('/getCategoryActivities/:id')
  getCategoryActivities(@Param('id') id: number) {
    return this.categoryService.getCategoryActivities(id);
  }

  @Get('/getCategoriesByMainCatId/:id')
  getCategoriesByMainCatId(@Param('id') id: number) {
    return this.categoryService.getCategoriesByMainCatId(id);
  }
  @Get('/removeById/:id')
  removeById(@Param('id') id: number) {
    return this.categoryService.removeById(id);
  }
}

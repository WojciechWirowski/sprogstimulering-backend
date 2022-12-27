import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { Activity } from '../activity/activity.entity';
import { UpdateCategoryDto } from './dto/updateCategoryDto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    try {
      return this.categoryRepository.save(createCategoryDto);
    } catch (error) {
      console.log(error.code);
    }
  }

  async getAll(): Promise<Category[]> {
    try {
      return await this.categoryRepository.find({
        relations: {
          activities: true,
        },
      });
    } catch (error) {
      console.log(error.code);
    }
  }

  async getCategoryActivities(categoryId: number): Promise<Activity[]> {
    try {
      const data = await this.categoryRepository.findOne({
        where: {
          id: categoryId,
        },
        relations: {
          activities: true,
        },
      });
      return data.activities;
    } catch (error) {
      console.log(error.code);
    }
  }

  async getCategoriesByMainCatId(mainCatId: number): Promise<Category[]> {
    try {
      return await this.categoryRepository.find({
        where: {
          mainCatId: mainCatId,
        },
        relations: {
          activities: true,
        },
      });
    } catch (error) {
      console.log(error.code);
    }
  }

  async removeById(id: number) {
    try {
      return await this.categoryRepository
        .findOneBy({
          id: id,
        })
        .then((x) => this.categoryRepository.remove(x));
    } catch (error) {
      console.log(error.code);
    }
  }
  async update(updateCategoryDto: UpdateCategoryDto) {
    try {
      return await this.categoryRepository.update(updateCategoryDto.id, {
        name: updateCategoryDto.name,
        imagePath: updateCategoryDto.imagePath,
        mainCatId: updateCategoryDto.mainCatId,
      });
    } catch (error) {
      console.log(error.code);
    }
  }
}

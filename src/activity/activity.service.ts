import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from './activity.entity';
import { Repository } from 'typeorm';
import { CreateActivityDto } from './dto/createActivity.dto';
import { Category } from '../category/category.entity';
import { UpdateActivityDto } from './dto/updateActivityDto';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createActivityDto: CreateActivityDto): Promise<Activity> {
    try {
      const category = await this.categoryRepository.findOne({
        where: { id: createActivityDto.category },
      });
      return this.activityRepository.save({
        name: createActivityDto.name,
        imagePath: createActivityDto.imagePath,
        description: createActivityDto.description,
        category: category,
      });
    } catch (error) {
      console.log(error.code);
    }
  }

  async getAll(): Promise<Activity[]> {
    try {
      return await this.activityRepository.find();
    } catch (error) {
      console.log(error.code);
    }
  }

  async getById(activityId: number): Promise<Activity> {
    try {
      return await this.activityRepository.findOne({
        where: {
          id: activityId,
        },
        relations: {
          ratings: true,
        },
      });
    } catch (error) {
      console.log(error.code);
    }
  }

  async removeById(activityId: number): Promise<Activity> {
    try {
      return await this.activityRepository
        .findOneBy({
          id: activityId,
        })
        .then((x) => this.activityRepository.remove(x));
    } catch (error) {
      console.log(error.code);
    }
  }

  async update(updateActivityDto: UpdateActivityDto) {
    try {
      const category = await this.categoryRepository.findOne({
        where: { id: updateActivityDto.category },
      });
      return await this.activityRepository.update(updateActivityDto.id, {
        name: updateActivityDto.name,
        imagePath: updateActivityDto.imagePath,
        description: updateActivityDto.description,
        category: category,
      });
    } catch (error) {
      console.log(error.code);
    }
  }
}

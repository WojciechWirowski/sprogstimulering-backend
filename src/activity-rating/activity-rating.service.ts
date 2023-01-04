import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityRating } from './activity-rating.entity';
import { CreateActivityRatingDto } from './dto/createActivityRating.dto';
import { Activity } from '../activity/activity.entity';

@Injectable()
export class ActivityRatingService {
  constructor(
    @InjectRepository(ActivityRating)
    private activityRatingRepository: Repository<ActivityRating>,
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) {}

    async create(createActivityRatingDto: CreateActivityRatingDto) {
    try {
      const activity = await this.activityRepository.findOne({
        where: { id: createActivityRatingDto.id },
      });
      return this.activityRatingRepository.save({
        activity: activity,
        value1: createActivityRatingDto.value1,
        value2: createActivityRatingDto.value2,
        value3: createActivityRatingDto.value3,
        value4: createActivityRatingDto.value4,
        value5: createActivityRatingDto.value5,
      });
    } catch (error) {
      console.log(error.code);
    }
  }

  async getAll(): Promise<ActivityRating[]> {
    try {
      return await this.activityRatingRepository.find();
    } catch (error) {
      console.log(error.code);
    }
  }

  async getById(activityRatingId: number): Promise<ActivityRating> {
    try {
      return await this.activityRatingRepository.findOneBy({
        id: activityRatingId,
      });
    } catch (error) {
      console.log(error.code);
    }
  }

  async removeById(activityRatingId: number): Promise<ActivityRating> {
    try {
      return await this.activityRatingRepository
        .findOneBy({
          id: activityRatingId,
        })
        .then((x) => this.activityRatingRepository.remove(x));
    } catch (error) {
      console.log(error.code);
    }
  }
}

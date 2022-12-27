import { Module } from '@nestjs/common';
import { ActivityRatingService } from './activity-rating.service';
import { ActivityRatingController } from './activity-rating.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityRating } from './activity-rating.entity';
import { Activity } from '../activity/activity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityRating, Activity])],
  providers: [ActivityRatingService],
  controllers: [ActivityRatingController],
})
export class ActivityRatingModule {}

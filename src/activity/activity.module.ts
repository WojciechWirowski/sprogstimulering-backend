import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { Activity } from './activity.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../category/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Activity, Category])],
  providers: [ActivityService],
  controllers: [ActivityController],
})
export class ActivityModule {}

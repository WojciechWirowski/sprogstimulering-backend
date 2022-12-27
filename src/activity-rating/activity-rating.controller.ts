import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ActivityRatingService } from './activity-rating.service';
import { CreateActivityRatingDto } from './dto/createActivityRating.dto';

@Controller('rating')
export class ActivityRatingController {
  constructor(private readonly activityRatingService: ActivityRatingService) {}

  @Post('/')
  create(@Body() createActivityRatingDto: CreateActivityRatingDto) {
    return this.activityRatingService.create(createActivityRatingDto);
  }

  @Get()
  getAll() {
    return this.activityRatingService.getAll();
  }

  @Get('/getById')
  getById(@Param('id') id: number) {
    return this.activityRatingService.getById(id);
  }

  @Get('/removeById')
  removeById(@Param('id') id: number) {
    return this.activityRatingService.removeById(id);
  }
}

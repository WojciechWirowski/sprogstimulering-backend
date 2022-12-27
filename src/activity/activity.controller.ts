import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/createActivity.dto';
import { UpdateActivityDto } from './dto/updateActivityDto';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post('/createActivity')
  create(@Body() createActivityDto: CreateActivityDto) {
    return this.activityService.create(createActivityDto);
  }
  @Post('/updateActivity')
  update(@Body() updateActivityDto: UpdateActivityDto) {
    return this.activityService.update(updateActivityDto);
  }

  @Get()
  getAll() {
    return this.activityService.getAll();
  }

  @Get('/getById/:id')
  getById(@Param('id') id: number) {
    return this.activityService.getById(id);
  }

  @Get('/removeById/:id')
  removeById(@Param('id') id: number) {
    return this.activityService.removeById(id);
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { ActivityRatingController } from './activity-rating.controller';

describe('ActivityRatingController', () => {
  let controller: ActivityRatingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivityRatingController],
    }).compile();

    controller = module.get<ActivityRatingController>(ActivityRatingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

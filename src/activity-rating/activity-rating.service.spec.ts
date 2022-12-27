import { Test, TestingModule } from '@nestjs/testing';
import { ActivityRatingService } from './activity-rating.service';

describe('ActivityRatingService', () => {
  let service: ActivityRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivityRatingService],
    }).compile();

    service = module.get<ActivityRatingService>(ActivityRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

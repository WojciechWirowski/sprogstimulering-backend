import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityModule } from './activity/activity.module';
import { ActivityRatingModule } from './activity-rating/activity-rating.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ActivityModule,
    TypeOrmModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/database.db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ActivityModule,
    ActivityRatingModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

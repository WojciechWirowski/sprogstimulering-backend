import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityModule } from './activity/activity.module';
import { ActivityRatingModule } from './activity-rating/activity-rating.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
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
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

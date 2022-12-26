import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ActivityRating } from '../activity-rating/activity-rating.entity';
import { Category } from '../category/category.entity';

@Entity('activities')
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  imagePath: string;

  @OneToMany(() => ActivityRating, (activityRating) => activityRating.activity)
  ratings: ActivityRating[];

  @Column()
  description: string;

  @ManyToOne(() => Category, (category) => category.activities)
  category: Category;
}

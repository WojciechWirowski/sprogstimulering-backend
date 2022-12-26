import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Activity } from '../activity/activity.entity';

@Entity('activity-rating')
export class ActivityRating {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Activity, (activity) => activity.ratings, {
    onDelete: 'CASCADE',
  })
  activity: Activity;

  @Column()
  value1: number;

  @Column()
  value2: number;

  @Column()
  value3: number;

  @Column()
  value4: number;

  @Column()
  value5: number;
}

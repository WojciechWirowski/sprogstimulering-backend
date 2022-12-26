import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Activity } from '../activity/activity.entity';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToMany(() => Activity, (activity) => activity.category)
  activities: Activity[];
  @Column()
  mainCatId: number;
  @Column()
  imagePath: string;
  @Column()
  name: string;
}

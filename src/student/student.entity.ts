import { University } from 'src/university/university.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;
  
  @ManyToOne(() => University, university => university.students)
  university: University;
}
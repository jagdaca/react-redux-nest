import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  status: string;

  @Column()
  views: number;

  @Column()
  content: string;

  @Column()
  publishedAt: Date;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}


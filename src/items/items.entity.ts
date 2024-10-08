import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;  // Auto-generated by the database

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;
}

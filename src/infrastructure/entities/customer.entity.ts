import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'varchar', length: 13 })
  phone_no: string;

  @Column({ type: 'timestamp', default: null })
  created_at: Date;

  @Column({ type: 'timestamp', default: null })
  updated_at: Date;
}

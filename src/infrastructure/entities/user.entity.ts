import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  username: string;

  @Column({ type: 'varchar', length: 100 })
  password: string;

  @Column({ type: 'int', default: null })
  customer: number;

  @Column({ type: 'timestamp', default: null })
  created_at: Date;

  @Column({ type: 'timestamp', default: null })
  updated_at: Date;
}

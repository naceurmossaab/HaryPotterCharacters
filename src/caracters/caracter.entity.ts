import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Spells } from '../spells/spell.entity';

@Entity()
export class Caracters {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'simple-array' })
  alternate_names: string[];

  @Column()
  species: string;

  @Column()
  gender: string;

  @Column()
  house: string;

  @Column({ type: 'date' })
  dateOfBirth: Date;

  @Column()
  yearOfBirth: number;

  @Column()
  wizard: boolean;

  @Column()
  ancestry: string;

  @Column()
  eyeColour: string;

  @Column()
  hairColour: string;

  @Column({ type: 'simple-json' })
  wand: {
    wood: string;
    core: string;
    length: number | null;
  };

  @Column()
  patronus: string;

  @Column()
  hogwartsStudent: boolean;

  @Column()
  hogwartsStaff: boolean;

  @Column()
  actor: string;

  @Column({ type: 'simple-array' })
  alternate_actors: string[];

  @OneToMany(() => Spells, (spells) => spells.caracter, {cascade: ['remove']})
  spells: Spells[];

  @Column()
  alive: boolean;

  @Column()
  image: string;

  @CreateDateColumn({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updatedAt: Date;
}
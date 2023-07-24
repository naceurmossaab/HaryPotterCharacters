import { CreateSpellDto } from "./dto/create-spell.dto";
import { UpdateSpellDto } from "./dto/update-spell.dto";
import { Spells } from "./spell.entity";

export interface ISpellService {
  create(createSpellDto: CreateSpellDto): Promise<Spells>;
  getAll(): Promise<Spells[]>;
  getOneById(id: number): Promise<Spells>;
  update(id: number, updateSpellDto: UpdateSpellDto): Promise<any>;
  remove(id: number): Promise<any>;
}
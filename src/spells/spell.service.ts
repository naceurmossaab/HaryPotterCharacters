import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateSpellDto } from "./dto/create-spell.dto";
import { UpdateSpellDto } from "./dto/update-spell.dto";
import { Spells } from "./spell.entity";
import { ISpellService } from "./spell";

@Injectable()
export class SpellsService implements ISpellService {
  constructor(@InjectRepository(Spells) private spellsRepository: Repository<Spells>) { }

  create(createSpellDto: CreateSpellDto): Promise<any> {
    const newSpell = this.spellsRepository.create(createSpellDto);
    return this.spellsRepository.save(newSpell);
  }

  getAll(): Promise<Spells[]> {
    return this.spellsRepository.find();
  }

  getOneById(id: number): Promise<Spells> {
    return this.spellsRepository.findOne({ where: { id } });
  }

  update(id: number, updateSpellDto: UpdateSpellDto): Promise<any> {
    return this.spellsRepository.update(id, updateSpellDto);
  }

  remove(id: number): Promise<any> {
    return this.spellsRepository.delete(id);
  }
}
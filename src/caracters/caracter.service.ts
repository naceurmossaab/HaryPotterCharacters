import { Injectable } from "@nestjs/common";
import { ICaracterService } from "./caracter";
import { InjectRepository } from "@nestjs/typeorm";
import { Caracters } from "./caracter.entity";
import { Repository } from "typeorm";
import { CreateCaracterDto } from "./dto/create-caracter.dto";
import { UpdateCaracterDto } from "./dto/update-caracter.dto";

@Injectable()
export class CaractersService implements ICaracterService {
  constructor(@InjectRepository(Caracters) private caractersRepository: Repository<Caracters>) { }

  create(createCaracterDto: CreateCaracterDto): Promise<Caracters> {
    const newCaracter = this.caractersRepository.create(createCaracterDto);
    return this.caractersRepository.save(newCaracter);
  }

  getAll(): Promise<Caracters[]> {
    return this.caractersRepository.find();
  }

  getOneById(id: number): Promise<Caracters> {
    return this.caractersRepository.findOne({ where: { id } });
  }

  update(id: number, updateCaracterDto: UpdateCaracterDto): Promise<any> {
    return this.caractersRepository.update(id, updateCaracterDto);
  }

  remove(id: number): Promise<any> {
    return this.caractersRepository.delete(id);
  }
}
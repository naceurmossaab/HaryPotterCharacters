import { CreateCaracterDto } from "./dto/create-caracter.dto";
import { UpdateCaracterDto } from "./dto/update-caracter.dto";
import { Caracters } from "./caracter.entity";

export interface ICaracterService {
  create(createCaracterDto: CreateCaracterDto): Promise<Caracters>;
  getAll(): Promise<Caracters[]>;
  getOneById(id: number): Promise<Caracters>;
  update(id: number, updateCaracterDto: UpdateCaracterDto): Promise<any>;
  remove(id: number): Promise<any>;
}
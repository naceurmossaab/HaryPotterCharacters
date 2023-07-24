import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Caracters } from "./caracter.entity";
import { CaracterController } from "./caracter.controller";
import { Services } from "../utils/constants";
import { CaractersService } from "./caracter.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Caracters])
  ],
  controllers: [CaracterController],
  providers: [{ provide: Services.CARACTERS, useClass: CaractersService }]
})
export class CaractersModule { }
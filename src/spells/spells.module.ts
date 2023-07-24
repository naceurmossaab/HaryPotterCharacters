import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Spells } from "./spell.entity";
import { SpellController } from "./spell.controller";
import { Services } from "../utils/constants";
import { SpellsService } from "./spell.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Spells])
  ],
  controllers: [SpellController],
  providers: [{ provide: Services.SPELLS, useClass: SpellsService }]
})
export class SpellsModule { }
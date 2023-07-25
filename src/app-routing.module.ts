import { Module } from "@nestjs/common";
import { RouterModule, Routes } from "@nestjs/core";
import { CaractersModule } from "./caracters/caracters.module";
import { Path } from "./utils/constants";
import { SpellsModule } from "./spells/spells.module";

const routes: Routes = [
  { path: Path.CARACTERS, module: CaractersModule },
  { path: Path.SPELLS, module: SpellsModule },
]

@Module({
  imports: [RouterModule.register(routes)],
  controllers: [],
  providers: []
})
export class AppRoutingModule { }
import { Module } from "@nestjs/common";
import { RouterModule, Routes } from "@nestjs/core";
import { CaractersModule } from "./caracters/caracters.module";

const routes: Routes = [
  { path: 'caracters', module: CaractersModule }
]

@Module({
  imports: [RouterModule.register(routes)],
  controllers: [],
  providers: []
})
export class AppRoutingModule { }
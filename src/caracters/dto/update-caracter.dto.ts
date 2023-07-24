import { PartialType } from "@nestjs/mapped-types";
import { CreateCaracterDto } from "./create-caracter.dto";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateCaracterDto extends PartialType(CreateCaracterDto) {
  @ApiPropertyOptional()
  name: string;

  @ApiPropertyOptional()
  alternate_names: string[];

  @ApiPropertyOptional()
  species: string;

  @ApiPropertyOptional()
  gender: string;

  @ApiPropertyOptional()
  house: string;

  @ApiPropertyOptional()
  dateOfBirth: Date;

  @ApiPropertyOptional()
  yearOfBirth: number;

  @ApiPropertyOptional()
  wizard: boolean;

  @ApiPropertyOptional()
  ancestry: string;

  @ApiPropertyOptional()
  eyeColour: string;

  @ApiPropertyOptional()
  hairColour: string;

  @ApiPropertyOptional()
  wand: {
    wood: string;
    core: string;
    length: number | null;
  };

  @ApiPropertyOptional()
  patronus: string;

  @ApiPropertyOptional()
  hogwartsStudent: boolean;

  @ApiPropertyOptional()
  hogwartsStaff: boolean;

  @ApiPropertyOptional()
  actor: string;

  @ApiPropertyOptional()
  alternate_actors: string[];

  @ApiPropertyOptional()
  alive: boolean;

  @ApiPropertyOptional()
  image: string;
}
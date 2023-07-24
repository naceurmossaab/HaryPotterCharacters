import { PartialType } from "@nestjs/mapped-types"
import { CreateSpellDto } from "./create-spell.dto";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { UpdateCaracterDto } from "../../caracters/dto/update-caracter.dto";

export class UpdateSpellDto extends PartialType(CreateSpellDto) {
  @ApiPropertyOptional()
  name: string;

  @ApiPropertyOptional()
  description: string;

  @ApiPropertyOptional({ type: 'number', default: null })
  caracter: UpdateCaracterDto;
}
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { CreateCaracterDto } from "../../caracters/dto/create-caracter.dto";

export class CreateSpellDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ type: 'number', default: null })
  @IsNotEmpty()
  caracter: CreateCaracterDto;
}
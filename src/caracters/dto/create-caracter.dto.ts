import { ApiProperty } from "@nestjs/swagger";

export class CreateCaracterDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  alternate_names: string[];

  @ApiProperty()
  species: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  house: string;

  @ApiProperty()
  dateOfBirth: Date;

  @ApiProperty()
  yearOfBirth: number;

  @ApiProperty()
  wizard: boolean;

  @ApiProperty()
  ancestry: string;

  @ApiProperty()
  eyeColour: string;

  @ApiProperty()
  hairColour: string;

  @ApiProperty()
  wand: {
    wood: string;
    core: string;
    length: number | null;
  };

  @ApiProperty()
  patronus: string;

  @ApiProperty()
  hogwartsStudent: boolean;

  @ApiProperty()
  hogwartsStaff: boolean;

  @ApiProperty()
  actor: string;

  @ApiProperty()
  alternate_actors: string[];

  @ApiProperty()
  alive: boolean;

  @ApiProperty()
  image: string;
}
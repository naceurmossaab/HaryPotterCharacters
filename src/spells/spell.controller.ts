import { Body, Controller, HttpException, Inject, Get, Post, Patch, Delete, UseFilters, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { Routes, Services } from "../utils/constants";
import { ApiTags } from "@nestjs/swagger";
import { HttpExceptionFilter } from "../utils/http-exception.filter";
import { CreateSpellDto } from "./dto/create-spell.dto";
import { UpdateSpellDto } from "./dto/update-spell.dto";
import { ISpellService } from "./spell";

@ApiTags(Routes.SPELLS)
@UseFilters(new HttpExceptionFilter())
@Controller(Routes.SPELLS)
export class SpellController {
  constructor(@Inject(Services.SPELLS) private readonly spellService: ISpellService) { }

  @Post()
  async create(@Body() createSpellDto: CreateSpellDto) {
    try {
      return await this.spellService.create(createSpellDto);
    } catch (error) {
      throw new HttpException(error, error.code | HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  getAll() {
    return this.spellService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const Spell = await this.spellService.getOneById(id);
    if (!Spell) throw new HttpException(`No Spell with id: ${id}`, HttpStatus.NOT_FOUND);
    return Spell;
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateSpellDto: UpdateSpellDto) {
    try {
      return await this.spellService.update(id, updateSpellDto);
    } catch (error) {
      throw new HttpException(error, error.code | HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.spellService.remove(id);
    } catch (error) {
      throw new HttpException(error, error.code | HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
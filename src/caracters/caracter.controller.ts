import { Body, Controller, HttpException, Inject, Get, Post, Patch, Delete, UseFilters, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { Routes, Services } from "../utils/constants";
import { ApiTags } from "@nestjs/swagger";
import { ICaracterService } from "./caracter";
import { CreateCaracterDto } from "./dto/create-caracter.dto";
import { HttpExceptionFilter } from "../utils/http-exception.filter";
import { UpdateCaracterDto } from "./dto/update-caracter.dto";

@ApiTags(Routes.CARACTERS)
@UseFilters(new HttpExceptionFilter())
@Controller(Routes.CARACTERS)
export class CaracterController {
  constructor(@Inject(Services.CARACTERS) private readonly caracterService: ICaracterService) { }

  @Post()
  async create(@Body() createCaracterDto: CreateCaracterDto) {
    try {
      return await this.caracterService.create(createCaracterDto);
    } catch (error) {
      throw new HttpException(error, error.code | HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  getAll() {
    return this.caracterService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const caracter = await this.caracterService.getOneById(id);
    if (!caracter) throw new HttpException(`No caracter with id: ${id}`, HttpStatus.NOT_FOUND);
    return caracter;
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateCaracterDto: UpdateCaracterDto) {
    try {
      return await this.caracterService.update(id, updateCaracterDto);
    } catch (error) {
      throw new HttpException(error, error.code | HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.caracterService.remove(id);
    } catch (error) {
      throw new HttpException(error, error.code | HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
import { Controller, Get, Post, Body } from '@nestjs/common';
import { PruebaService } from './prueba.service';
import { CreatePruebaDto } from './dto/create-prueba.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Prueba } from './entities/prueba.entity';

@ApiTags('Prueba')
@Controller('prueba')
export class PruebaController {
  constructor(private readonly pruebaService: PruebaService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'La cadena se processo correctamente',
    type: Prueba,
  })
  create(@Body() createPruebaDto: CreatePruebaDto) {
    return this.pruebaService.create(createPruebaDto);
  }
}

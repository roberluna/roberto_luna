import { Injectable } from '@nestjs/common';
import { CreatePruebaDto } from './dto/create-prueba.dto';

@Injectable()
export class PruebaService {
  create(createPruebaDto: CreatePruebaDto) {
    const { string_text } = createPruebaDto;
    return Buffer.from(string_text).toString('base64');
  }
}

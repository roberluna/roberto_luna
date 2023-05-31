import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';
export class CreatePruebaDto {
  @ApiProperty({
    description: 'Cadena de texto de prueba',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  @MinLength(1)
  string_text: string;
}

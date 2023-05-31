import { Module } from '@nestjs/common';
import { PruebaModule } from './prueba/prueba.module';

@Module({
  imports: [PruebaModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}

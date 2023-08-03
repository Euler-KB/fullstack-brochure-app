import { Module } from '@nestjs/common';
import { CityProductController } from './city-product.controller';
import { ConfigModule } from '@nestjs/config';
import { BrochuresService } from './brochures.service';
import { CmsService } from './cms.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [CityProductController],
  providers: [BrochuresService, CmsService],
})
export class AppModule {}

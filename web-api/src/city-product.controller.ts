import { Controller, Get, Query } from '@nestjs/common';
import { BrochuresService } from './brochures.service';
import { CmsService } from './cms.service';
import { IsString } from 'class-validator';

class GridQuery {
  @IsString()
  product: string;

  @IsString()
  city: string;
}

class GridDataResponse {
  status: string;
  data: any;
}

@Controller()
export class CityProductController {
  constructor(
    private readonly brochureService: BrochuresService,
    private readonly cmsService: CmsService,
  ) {}

  @Get('/city-product-grid')
  async queryGridData(
    @Query() gridQuery: GridQuery,
  ): Promise<GridDataResponse> {
    const products = await this.cmsService.getProducts(gridQuery.product);
    const cities = await this.cmsService.getCities(gridQuery.city);
    if (products.length === 0 || cities.length === 0)
      return { status: 'not-found', data: null };

    const searchResponse = await this.brochureService.search(
      48.8566,
      2.3522,
      gridQuery.product,
      undefined,
      0,
      10,
    );

    return {
      status: 'ok',
      data: {
        brochures: searchResponse._embedded.brochures.slice(0, 10),
        product: products[0],
        city: cities[0],
      },
    };
  }
}

import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

interface City {
  id: number;
  name: string;
  description: string;
  urlRepresentation: string;
  enabled: boolean;
}

interface Product {
  id: number;
  name: string;
  description: string;
  urlRepresentation: string;
  enabled: boolean;
}

@Injectable()
export class CmsService {
  constructor(private readonly configService: ConfigService) {}

  getBaseUrl(): string {
    return this.configService.get<string>('CMS_API_BASE_UL');
  }

  async getCities(city?: string): Promise<City[]> {
    const filters = city
      ? `filters?[name][$eq]=${encodeURIComponent(city)}`
      : null;
    const response = await axios.get(`${this.getBaseUrl()}/cities?${filters}`);

    if (response.status !== 200)
      throw new InternalServerErrorException('Failed fetching cities');

    const { data } = response.data;
    return data.map((item) => ({
      id: item.id,
      ...item.attributes,
    }));
  }

  async getProducts(product?: string): Promise<Product[]> {
    const filters = product
      ? `filters[name][$eq]=${encodeURIComponent(product)}`
      : null;

    const response = await axios.get(
      `${this.getBaseUrl()}/products?${filters}`,
    );
    if (response.status !== 200)
      throw new InternalServerErrorException('Failed fetching products');

    const { data } = response.data;
    return data.map((item) => ({
      id: item.id,
      ...item.attributes,
    }));
  }
}

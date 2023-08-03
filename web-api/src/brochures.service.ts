import {
  Injectable,
  InternalServerErrorException,
  OnModuleInit,
} from '@nestjs/common';
import * as mockBrochuresData from './brochures-response.mock.json';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const mock = new MockAdapter(axios, {
  onNoMatch: 'passthrough',
});

@Injectable()
export class BrochuresService implements OnModuleInit {
  onModuleInit(): any {
    mock.onGet(/\/v1\/brochures\/search/).reply(200, mockBrochuresData);
  }

  async search(
    lat: number,
    lng: number,
    query: string,
    publisherIds?: string,
    page?: number,
    size?: number,
  ) {
    const qs: any = { lat, lng, query };
    if (publisherIds) qs.publisherIds = publisherIds;
    if (page) qs.page = page;
    if (size) qs.size = size;

    const response = await axios.get(
      `/v1/brochures/search?${new URLSearchParams(qs)}`,
    );

    if (response.status !== 200)
      throw new InternalServerErrorException('Failed fetching brochure data');

    return response.data;
  }
}

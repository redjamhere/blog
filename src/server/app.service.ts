import { Injectable } from '@nestjs/common';
import {TestResponse} from '../common/TestResponse';

@Injectable()
export class AppService {
  getHello(): TestResponse {
    return {text: 'Hello from nest'};
  }
}

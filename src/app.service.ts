import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { sup: string } {
    return {
      sup: 'bud',
    };
  }
}

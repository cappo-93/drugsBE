import { Injectable } from '@nestjs/common';
import { DB } from './mock';

@Injectable()
export class AppService {
  private db = DB;
  getDb() {
    return this.db;
  }
}

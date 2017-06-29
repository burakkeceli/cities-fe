import {Injectable} from '@angular/core';

@Injectable()
export class ConstantService {

URL_BASE : string;
CITIES : string;
CITY : string;
COMMENT : string;
REGISTER : string;
COUNTRY : string;
IS_TOKEN_EXPIRED : string;
LOGIN : string;

constructor() {
    this.URL_BASE = 'http://localhost:8081';
    this.CITIES = '/cities';
    this.CITY = '/city';
    this.COMMENT = '/comment';
    this.REGISTER = '/register';
    this.COUNTRY = '/country';
    this.IS_TOKEN_EXPIRED = '/isExpired';
    this.LOGIN = '/login';
  }
}
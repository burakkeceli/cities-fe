import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConstantService } from '../constant/constant.service';

/**
 * This class provides the CitySearch service with methods to read names and add names.
 */
@Injectable()
export class CitySearchService {

  private cities: Observable<string[]>;

  constructor(private _http: Http, private ConstantService: ConstantService) {}

  get(): Observable<string[]> {
  let url = this.ConstantService.URL_BASE + this.ConstantService.CITIES + this.ConstantService.CITY;
    this.cities = this._http.get(url)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    return this.cities;
  }

  getCity(cityId: string): Observable<string> {
    let url = this.ConstantService.URL_BASE + this.ConstantService.CITIES + this.ConstantService.CITY;
    let uri = url + '/'+ cityId;
    return this._http.get(uri)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}


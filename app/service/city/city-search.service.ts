import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Urls } from '../../constant/urls';
// import 'rxjs/add/operator/do';  // for debugging

/**
 * This class provides the CitySearch service with methods to read names and add names.
 */
@Injectable()
export class CitySearchService {

  private cities: Observable<string[]>;

  /**
   * Creates a new CitySearchService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private _http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  get(): Observable<string[]> {
	console.log(Urls.URL_BASE + Urls.CITIES + Urls.CITY);
    this.cities = this._http.get(Urls.URL_BASE + Urls.CITIES + Urls.CITY)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    return this.cities;
  }

  getCity(cityId: string): Observable<string> {
    let uri = Urls.URL_BASE + Urls.CITIES + Urls.CITY+'/'+cityId;
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


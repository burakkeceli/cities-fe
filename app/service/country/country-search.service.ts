import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/**
 * This class provides the CountrySearch service with methods to read names and add names.
 */
@Injectable()
export class CountrySearchService {

  constructor(private _http: Http) {}

  getCountry(countryId: string): Observable<string> {
    let uri = 'http://localhost:8081/cities/country/'+countryId;
    return this._http.get(uri)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    
  }
  
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}


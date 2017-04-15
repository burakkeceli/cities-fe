import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/user';
import 'rxjs/add/operator/map'

@Injectable()
export class CommentService {

  constructor(private _http: Http) {}

  getCommentsOfCity(cityId: string): Observable<string> {
    let uri = 'http://localhost:8081/cities/city/'+cityId+'/comment/';
    return this._http.get(uri)
                    .map((res: Response) => {
                      console.log("comment " + res.json());
                      return res.json();
                    })
                    .catch(this.handleError);
  }

  addCommentToCity(user: User, cityId: string, commentText: string) {
    localStorage.getItem
    let headers = new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': user.token});
    let options = new RequestOptions({ headers: headers });

    return this._http.post('http://localhost:8081/cities/city/'+cityId+'/comment', commentText, options)
    .map((response: Response) => {
        console.log(response.json());
    });
  }
  
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}


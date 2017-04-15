import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/user/user'
import { Urls } from '../../constant/urls';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {

    private currentUser: User;
    constructor(private _http: Http) {}

    login(username: string, password: string) {

    let body = JSON.stringify({ username: username, password: password });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(Urls.URL_BASE + Urls.CITIES + Urls.REGISTER, body, options)
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let user = response.json();
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                window.location.reload();
            }
        });
    }
 
    logout() {
        localStorage.removeItem('currentUser');
    }
}
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/user/user'
import { ConstantService } from '../constant/constant.service';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {

    private currentUser: User;
    constructor(private _http: Http, private ConstantService: ConstantService) {}

    login(username: string, password: string) {

    let body = JSON.stringify({ username: username, password: password });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.ConstantService.URL_BASE + 
                           this.ConstantService.CITIES + 
                           this.ConstantService.REGISTER, 
                           body, options)
        .map((response: Response) => {
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
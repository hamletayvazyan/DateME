import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {  }


  usersUrl = '../../assets/user.json';

  url = 'http://localhost:3100/auth';


  requestReg(auth){
   console.log(auth)
  }


  /*
  requestReg(auth):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post(this.url, auth, httpOptions)

  }
*/


  getUsers() {
    return this.http.get(this.usersUrl)
      .map(res => res);
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) { }

  usersUrl = '../../assets/user.json';

  getUsers() {
    return this.http.get(this.usersUrl)
      .map(res => res);
  }
}

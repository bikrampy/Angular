import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersResponse } from './user-data-interface';

@Injectable({
  providedIn: 'root',
})
export class UserData {
  constructor(private http: HttpClient){}
  apiURL = 'https://dummyjson.com/users';
  getProfiles(){
    return this.http.get<UsersResponse>(this.apiURL);
  }
}

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http: HttpClient) { }


  searchUser(user) {
console.log('user',user)
    return this.http.get(`https://api.github.com/search/users?q=${user}`);
  }
}

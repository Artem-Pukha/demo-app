import { Injectable } from '@angular/core';
import {User} from "../user";
import {HttpClient, HttpParams} from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl: string = "http://localhost:8080/user";
  getAllUsersUrl: string = "http://localhost:8080/user/all";
  deleteUserByIdUrl: string = "http://localhost:8080/user/";

  constructor(private http:HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, httpOptions)
  }

  getUsersList() {
    return this.http.get<User[]>(this.getAllUsersUrl)
  }

  deleteUser(id:string){
    return this.http.delete(this.deleteUserByIdUrl+id)
  }

}

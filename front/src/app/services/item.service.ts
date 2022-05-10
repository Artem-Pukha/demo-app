import { Injectable } from '@angular/core';
import {User} from "../user";
import {HttpClient, HttpParams} from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {Item} from "../item";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  saveItemUrl: string = "http://localhost:8080/item";
  getItemByIdUrl: string = "http://localhost:8080/item/by-user/"; //add {id}

  constructor(private http:HttpClient) { }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.saveItemUrl, item, httpOptions)
  }

  getItems(id: string){
    return this.http.get<Item[]>(this.getItemByIdUrl+id)
  }



}

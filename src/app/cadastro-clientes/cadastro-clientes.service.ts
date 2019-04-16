import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl:string = "http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private httpClient: HttpClient) {}

  get_usuarios() {
    return this.httpClient.get(this.baseUrl + '/usuarios');
  }

  post_usuarios(usuario: string) {
    return this.httpClient.post(this.baseUrl + '/usuarios/', usuario, this.httpOptions);
  }
}

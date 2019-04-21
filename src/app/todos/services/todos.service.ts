import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseURL = `https://mogmujk3qb.execute-api.eu-west-1.amazonaws.com`;
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getTodos() {
    const url = `${baseURL}/prod/items`;
    return this.http.get(url);
  }
}

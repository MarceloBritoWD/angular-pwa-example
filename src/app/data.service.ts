import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getCat(): any {
    return this.httpClient.get('https://api.thecatapi.com/v1/images/search');
  }

}

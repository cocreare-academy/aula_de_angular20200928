import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface User {
  id: number;
  name: string;
  img: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor(
    private httpService: HttpClient
  ) { }

  search() {
    return this.httpService.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
  } 
}

export {User}
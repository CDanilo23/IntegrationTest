import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  constructor( public http: HttpClient) { }

  getPilots() {
    return this.http.get('...');
  }

}

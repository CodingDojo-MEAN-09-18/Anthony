import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getNotes();
  }
  getNotes() {
    console.log('service route');
    return this._http.get('/notes');
  }
  addNotes(note) {
    console.log('service creating notes', note);
    return this._http.post('/addNotes', note);
  }
}

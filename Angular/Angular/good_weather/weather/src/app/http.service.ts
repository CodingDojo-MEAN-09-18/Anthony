import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getBurbank();
    this.getChicago();
    this.getDallas();
    this.getWashington();
    this.getSeattle();
  }
  getBurbank() {
      return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Burbank&APPID=bc525aecb63ffb385696175462b2a742');
  }
  getChicago() {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=bc525aecb63ffb385696175462b2a742');
  }
  getDallas() {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Dallas&APPID=bc525aecb63ffb385696175462b2a742');
  }
  getWashington() {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Washington&APPID=bc525aecb63ffb385696175462b2a742');
  }
  getSanjose() {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=San%20Jose&APPID=bc525aecb63ffb385696175462b2a742');
  }
  getSeattle() {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Seattle&APPID=bc525aecb63ffb385696175462b2a742');
  }
}

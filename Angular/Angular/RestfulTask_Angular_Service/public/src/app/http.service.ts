import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
  }
}
getTasks(){
  //our http response is an observable, store it in a variable
  let tempObservable = this._http.get('/tasks');
  //subscribe to the observable and provide the code we would like to do with
  //our data from the response.
  tempObservable.subscribe( data => console.log('GOT our tasks!', data));
}
getTaskById(){
    let tempObservable = this._http.get('/:id');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }
}

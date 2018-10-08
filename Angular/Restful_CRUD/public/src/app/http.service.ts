import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
  }
  getTasks() {
    return this._http.get('/tasks');
  }
  postToServer(num) {
    // post is used for more then one argument.
    // use the .post() method of HttpClient
    // num must be an object
    // provide the url of your post route - make sure this is set up in your server!
    // console.log('this is from the post to server function', num);
    return this._http.post('/showATask', num);
  }
  addTask(newtask) {
    return this._http.post('/Addatask', newtask);
  }
  update(editTask) {
    console.log('This is from update', editTask);
    return this._http.post('/editaTask', editTask);
  }
  remove(ataskId) {
    console.log('This is from remove', ataskId);
    return this._http.post('/remove', ataskId);
  }
}

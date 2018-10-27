import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getAuthors();
  }
  addAuthor(newAuthor) {
    console.log('This is from addAuthors in service', newAuthor);
    return this._http.post('/addAuthor', newAuthor);
  }
  getAuthors() {
    return this._http.get('/authors');
  }
  getAnAuthor(id) {
    console.log('This is getAnAuthor');
    return this._http.post('/showAuthor', id);
  }
  postToServer(num) {
    // post is used for more then one argument.
    // use the .post() method of HttpClient
    // num must be an object
    // provide the url of your post route - make sure this is set up in your server!
    // console.log('this is from the post to server function', num);
    return this._http.post('/showAuthors', num);
  }
  update(editAuthor) {
    console.log('This is from update', editAuthor);
    return this._http.put('/editaAuthor', editAuthor);
  }
  remove(AuthorId) {
    console.log('This is from remove', AuthorId);
    return this._http.delete('/remove/' + AuthorId);
  }
}

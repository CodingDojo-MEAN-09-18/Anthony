import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {}
  title = 'public';
  authors;
  ngOnInit() {
    this.allAuthors();
  }
  allAuthors() {
    const observable = this._http.getAuthors();
    observable.subscribe(data => {
      console.log('observable data', data);
      this.authors = data;
    });
  }
  editInfo(id) {
    this._router.navigate(['/edit/' + id]);
  }
  remove(id) {
    console.log(id);
    const observable = this._http.remove(id);
    observable.subscribe(data => {
      console.log('deleted', data);
    });
  }
}

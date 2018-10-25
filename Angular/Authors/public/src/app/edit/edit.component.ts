import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  person;
  author;
  id: number;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService
  ) {}
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
  });
  this._http.getAnAuthor({data: this.id})
        .subscribe((author) => {
          this.author = author;
  });
  }
  edit(event: Event) {
    event.preventDefault();
    const observable = this._http.update({data: {id: this.id, name: this.author.name}});
    observable.subscribe(data => {
      console.log('This is from click', data);
    });
    this._router.navigate(['/']);
  }
}

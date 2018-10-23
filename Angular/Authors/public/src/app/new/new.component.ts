import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  addAuthor: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService
  ) {}
  ngOnInit() {
    this.addAuthor = {author: ''};
  }
  NewAuthor() {
    console.log('clicked worked');
    console.log(this.addAuthor);
    // code to send off the form data (this.newTask) to the service
    // Reset this.newTask to new, clean object
    const observable = this._http.addAuthor({data: this.addAuthor } );
    observable.subscribe(data => {
      console.log('This is from onSubmit and heres the data', data);
    });
    this.addAuthor = {author: ''};
    }
  }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  author;
  id: Number;
  content = {
    Aid:  this.id,
    word: ''
  };
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  this._http.getAnAuthor({data: this.id})
    .subscribe((author) => {
      this.author = author;
    });
  }
  remove(quote) {
    console.log(quote);
    this.content = {Aid: this.id, word: quote};
    const observable = this._http.removeQuote(this.content);
    observable.subscribe(data => {
      console.log('This is from subcribe quote component', data);
    });
  }
}

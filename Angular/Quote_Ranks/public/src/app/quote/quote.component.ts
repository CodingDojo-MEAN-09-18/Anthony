import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { NumberFormatStyle } from '@angular/common';

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
    word: '',
  };
  vote: number;
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
  numDist(quote) {
    console.log('numDist button works');
    this.vote = 1;
    // this.content = {Aid: this.id, vote: ;
    const observable = this._http.numChange({data: {aVote: this.vote, id: this.id, words: quote }});
    observable.subscribe(data => {
      console.log('This is from click', data);
    });
  }
}

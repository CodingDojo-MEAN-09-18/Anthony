import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  author;
  aQuote;
  id: Number;
  constructor(
    private _route: ActivatedRoute,
    private _http: HttpService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.aQuote = {quote: ''};
    // Note the use of .parent
    this._route.parent.params.subscribe(params => {
    console.log(`The parent params: ${params}`);
    this.id = params['id'];
    });
    this._http.getAnAuthor({data: this.id})
    .subscribe((author) => {
      this.author = author;
    });
  }
  addQuote(event: Event) {
    event.preventDefault();
    const observable = this._http.createQuote({id: this.id, quote: {quote: this.aQuote.quote, vote: Number}});
    observable.subscribe(data => {
      console.log('This is from click', data);
    this.aQuote = {quote: ''};
    });
    this._router.navigate(['/']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
     // Note the use of .parent
     this._route.parent.params.subscribe(params =>
      console.log(`The parent params: ${params}`));
  }
}

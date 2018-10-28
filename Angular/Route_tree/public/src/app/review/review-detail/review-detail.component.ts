import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
     // Note the use of .parent
     this._route.parent.params.subscribe(params =>
      console.log(`The parent params: ${params}`));
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    // note the use of the .parent
    this._route.parent.params.subscribe(params =>
      console.log('the parent params: ${params}'));
  }

}

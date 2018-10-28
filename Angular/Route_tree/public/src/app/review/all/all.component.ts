import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
     // Note the use of .parent
     this._route.parent.params.subscribe(params =>
      console.log(`The parent params: ${params}`));
  }
}

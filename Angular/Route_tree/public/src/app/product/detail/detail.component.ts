import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
     // Note the use of .parent
     this._route.parent.params.subscribe(params =>
      console.log(`The parent params: ${params}`));
  }
}

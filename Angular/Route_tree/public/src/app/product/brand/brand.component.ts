import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    // Note the use of .parent
    this._route.parent.params.subscribe(params =>
      console.log(`The parent params: ${params}`));
  }

}

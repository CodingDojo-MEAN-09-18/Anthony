import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  city;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService
  ) {}
  ngOnInit() {this.getDallasFromService();
  }
  getDallasFromService(): void {
    this._http.getDallas().subscribe( data => {
      console.log(data);
     this.city = data.main;
    });
  }
}


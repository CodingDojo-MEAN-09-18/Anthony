import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  city;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService
  ) {}
  ngOnInit() {
    this.getChicagoFromService();
  }
  getChicagoFromService(): void {
    this._http.getChicago().subscribe( data => {
      console.log(data);
     this.city = data.main;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  city;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService
  ) {}
  ngOnInit() {this.getSeattleFromService();
   }
  getSeattleFromService(): void {
    this._http.getSeattle().subscribe( data => {
      console.log(data);
     this.city = data.main;
    });
  }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  city;
  ability;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService
    ) {}
  ngOnInit() { this.getBurbankFromService(); }
  // goHome() {
  //   this._router.navigate(['/home']);
  // }
  getBurbankFromService(): void {
     this._http.getBurbank().subscribe( data => {
       console.log(data);
      this.city = data.main;
      // this.ability = data.abilities[0].ability.name;
     });
  }
//  getPokemon() {
//   this._route.paramMap.subscribe( params => {
//     HttpService.getPokemon((data) => { console.log(data);
//   });
//   });
 }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService
    ) {}
  // ngOnInit() {}
  // goHome() {
  //   this._router.navigate(['/home']);
  // }
 getPokemon() {
  this._route.paramMap.subscribe( params => {
    HttpService.getPokemon((data) => { console.log(data);
  });
  });
 }
}

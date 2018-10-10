import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-burbank-ca',
  templateUrl: './burbank-ca.component.html',
  styleUrls: ['./burbank-ca.component.css']
})
export class BurbankCAComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
        console.log(params['id']);
    });
  }
  goHome() {
    this._router.navigate(['/home']);
  }
}

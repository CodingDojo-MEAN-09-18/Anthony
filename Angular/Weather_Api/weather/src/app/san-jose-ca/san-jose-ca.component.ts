import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-san-jose-ca',
  templateUrl: './san-jose-ca.component.html',
  styleUrls: ['./san-jose-ca.component.css']
})
export class SanJoseCAComponent implements OnInit {
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


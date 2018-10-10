import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-dallas-tx',
  templateUrl: './dallas-tx.component.html',
  styleUrls: ['./dallas-tx.component.css']
})
export class DallasTXComponent implements OnInit {
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

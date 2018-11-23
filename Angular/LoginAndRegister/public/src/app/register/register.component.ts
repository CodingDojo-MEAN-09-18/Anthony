import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any;

  constructor() { }

  ngOnInit() {
    this.user = {name: '', email: ''};
  }
  onSubmit() {
    this.user = {name: '', email: ''};
  }

}

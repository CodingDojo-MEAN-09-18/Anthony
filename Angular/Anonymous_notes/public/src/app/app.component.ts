import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  word: any;
  AllNotes;
  constructor(
    private _http: HttpService
  ) {}
  ngOnInit() {
    this.getNotes();
    this.word = {note: ''};
  }
  getNotes() {
    console.log('this is the getNotes in app component');
    const observable = this._http.getNotes();
    observable.subscribe(data => this.AllNotes = data);
  }
  submitNote() {
    console.log('clicked worked');
    console.log(this.word);
    const observable = this._http.addNotes({data: this.word});
    observable.subscribe(data => {
      console.log('This is from onSubmit and heres the data', data);
    });
    this.word = {note: ''};
  }
}

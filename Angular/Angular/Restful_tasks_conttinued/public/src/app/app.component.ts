import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
//Implement OnInit
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks;
  //"let tasks: any", where any could be any type of data
  //For example if you know your data will be a string you
  //could assign a variable as such: let str: string;
  title = "app";
  constructor(private _httpService: HttpService){}
  ngOnInit(){
      this.getTasksFromService()
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log('Got our data!', data)
      this.tasks = data;
      console.log(this.tasks);
    });
  }
}

import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
//Implement OnInit
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks_title;
  tasks_info;
  aNumber: number;
  //"let tasks: any", where any could be any type of data
  //For example if you know your data will be a string you
  //could assign a variable as such: let str: string;
  title = "app";
  constructor(private _httpService: HttpService){}
  //ngOnit runs right away before webpage.
  ngOnInit(){
  }
  // getTasksFromService(){
  //   let observable = this._httpService.getTasks()
  //   observable.subscribe(data => {
  //     console.log('Got our data!', data)
  //     this.task = data;
  //   });
  // }
  showAll(): void {
    console.log(`Click event is working`);
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log('Got our data! First button', data)
      this.tasks_title = data;
    });
  };
  displayInfo(num: Number): void {
    console.log(`click event working: ${num}`);
    let observableTwo = this._httpService.postToServer({data:num});
    observableTwo.subscribe(data => {
      console.log("This is from subscribe!", data)
      this.tasks_info = data;
    });
  };
}

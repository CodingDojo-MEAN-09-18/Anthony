import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
// Implement OnInit
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks_title;
  task;
  tasks_info: any;
  newTask: any;
  // "let tasks: any", where any could be any type of data
  // For example if you know your data will be a string you
  // could assign a variable as such: let str: string;
  title = 'app';
  constructor(private _httpService: HttpService) {}
  // ngOnit runs right away before webpage.
  ngOnInit() {
    this.newTask = {title: '', description: ''};
    this.getTasksFromService();
  }
  getTasksFromService() {
    const observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('Got our data!', data);
      this.task = data;
    });
  }
  showAll(): void {
    console.log(`Click event is working`);
    const observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('Got our data! First button', data);
      this.tasks_title = data;
    });
  }
  onSubmit() {
  // code to send off the form data (this.newTask) to the service
  // Reset this.newTask to new, clean object
  const observable = this._httpService.addTask({data: this.newTask});
  observable.subscribe(data => {
    console.log('This is from onSubmit and heres the data', data);
  });
  const ReGetData = this._httpService.getTasks();
    ReGetData.subscribe(data => {
      console.log('Got our data!', data);
      this.task = data;
    });
  this.newTask = {title: '', description: ''};
  }
  getInfo(num: Number): void {
    console.log(`click event working: ${num}`);
    const observableTwo = this._httpService.postToServer({data: num});
    observableTwo.subscribe(data => {
      // console.log( 'This is from subscribe!', data);
      this.tasks_info = data;
    });
  }
  editSubmit(): void {
    console.log(`editSubmit is working`);
    const observableTwo = this._httpService.update({data: this.tasks_info});
    observableTwo.subscribe(data => {
      console.log('This is from subscribe!', data);
    });
  this.tasks_info = {id: Number, title: '', description: ''};
  }
  getRid(num: Number): void {
    console.log(`getRid of , ${num}`);
    const observableTwo = this._httpService.remove({data: num});
    observableTwo.subscribe(data => {
      console.log('This is from subscribe!', data);
    });
  }
}

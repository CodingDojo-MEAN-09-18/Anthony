import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';//This is to register the model/service
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { TaskComponent } from './task/task.component';//To make http requests

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service'; // This is to register the model/service

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { HttpClientModule} from '@angular/common/http';
import { QuoteComponent } from './quote/quote.component';
import { CreateComponent } from './quote/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    NewComponent,
    QuoteComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

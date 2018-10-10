import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeattleWAComponent } from './seattle-wa/seattle-wa.component';
import { SanJoseCAComponent } from './san-jose-ca/san-jose-ca.component';
import { BurbankCAComponent } from './burbank-ca/burbank-ca.component';
import { DallasTXComponent } from './dallas-tx/dallas-tx.component';
import { WashingtonDCComponent } from './washington-dc/washington-dc.component';
import { ChicagoILComponent } from './chicago-il/chicago-il.component';

@NgModule({
  declarations: [
    AppComponent,
    SeattleWAComponent,
    SanJoseCAComponent,
    BurbankCAComponent,
    DallasTXComponent,
    WashingtonDCComponent,
    ChicagoILComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

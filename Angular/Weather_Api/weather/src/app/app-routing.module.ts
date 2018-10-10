import { BurbankCAComponent } from './burbank-ca/burbank-ca.component';
import { ChicagoILComponent } from './chicago-il/chicago-il.component';
import { DallasTXComponent } from './dallas-tx/dallas-tx.component';
import { SanJoseCAComponent } from './san-jose-ca/san-jose-ca.component';
import { SeattleWAComponent } from './seattle-wa/seattle-wa.component';
import { WashingtonDCComponent } from './washington-dc/washington-dc.component';
// import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '/Seattle_WA', component: BurbankCAComponent },
  { path: '/San_Jose_CA', component: ChicagoILComponent },
  { path: '/Burbank_CA', component: DallasTXComponent },
  { path: '/Dallas_TX', component: SanJoseCAComponent },
  { path: '/Washington_DC', component: SeattleWAComponent },
  { path: '/Chicago_IL', component: WashingtonDCComponent },
  // use a colon and parameter name to include a parameter in the url
  // { path: 'gamma/:id', component: GammaComponent },
  // redirect to /alpha if there is nothing in the url
  // { path: '', pathMatch: 'full', redirectTo: '/alpha' },
  // the ** will catch anything that did not match any of the above routes
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

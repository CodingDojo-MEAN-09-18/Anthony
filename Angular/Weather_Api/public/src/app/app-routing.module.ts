import { BurbankCAComponent } from './burbank-ca/burbank-ca.component';
import { ChicagoILComponent } from './chicago-il/chicago-il.component';
// import { GammaComponent } from './gamma/gamma.component';
import { DallasTXComponent } from './dallas-tx/dallas-tx.component';
import { SanJoseCAComponent } from './san-jose-ca/san-jose-ca.component';
import { SeattleWAComponent } from './seattle-wa/seattle-wa.component';
import { WashingtonDCComponent } from './washington-dc/washington-dc.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'burbank', component: BurbankCAComponent },
  { path: 'chicago', component: ChicagoILComponent },
  { path: 'dallas', component: DallasTXComponent },
  { path: 'sanjose', component: SanJoseCAComponent },
  { path: 'seattle', component: SeattleWAComponent },
  { path: 'dc', component: WashingtonDCComponent },
  // use a colon and parameter name to include a parameter in the url
  // { path: 'gamma/:id', component: GammaComponent },
  // // redirect to /alpha if there is nothing in the url
  // { path: '', pathMatch: 'full', redirectTo: '/alpha' },
  // // the ** will catch anything that did not match any of the above routes
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

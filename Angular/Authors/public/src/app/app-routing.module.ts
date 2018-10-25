import {  NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
// import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'add', component: NewComponent },
  { path: 'edit', component: EditComponent },
  // use a colon and parameter name to include a parameter in the url
  { path: 'edit/:id', component: EditComponent },
  // // redirect to /alpha if there is nothing in the url
  // { path: '', pathMatch: 'full', redirectTo: 'home' },
  // // the ** will catch anything that did not match any of the above routes
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

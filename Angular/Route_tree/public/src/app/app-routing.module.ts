import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { CategoryComponent } from './product/category/category.component';
import { BrandComponent } from './product/brand/brand.component';
import { DetailComponent } from './product/detail/detail.component';
import { AuthorComponent } from './review/author/author.component';
import { AllComponent } from './review/all/all.component';
import { ReviewDetailComponent } from './review/review-detail/review-detail.component';
const routes: Routes = [
  { path: 'product', component: ProductComponent,
    children: [
      {path: 'details/:id', component: DetailComponent},
      {path: 'brand/:brand', component: BrandComponent},
      {path: 'category/:cat', component: CategoryComponent}
    ]},
  { path: 'review', component: ReviewComponent,
  children: [
    {path: 'details/:id', component: ReviewDetailComponent},
    {path: 'author/:id', component: AuthorComponent},
    {path: 'all/:id', component: AllComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

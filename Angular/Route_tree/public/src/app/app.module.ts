import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { DetailComponent } from './product/detail/detail.component';
import { BrandComponent } from './product/brand/brand.component';
import { CategoryComponent } from './product/category/category.component';
import { AuthorComponent } from './review/author/author.component';
import { AllComponent } from './review/all/all.component';
import { ReviewDetailComponent } from './review/review-detail/review-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ReviewComponent,
    DetailComponent,
    BrandComponent,
    CategoryComponent,
    AuthorComponent,
    AllComponent,
    ReviewDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

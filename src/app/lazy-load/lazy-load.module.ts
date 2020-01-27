import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadComponent } from './components/lazy-load-page/lazy-load-page.component';
import { AppRoutingModule } from './lazyload-app-routing.module';



@NgModule({
  declarations: [LazyLoadComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class CreditCardModule { }

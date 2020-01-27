import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadComponent } from './components/lazy-load-page/lazy-load-page.component';

const routes: Routes = [
  {
    path:"",
    component:LazyLoadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

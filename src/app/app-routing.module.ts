import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './components/pages/one/one.component'
import { ThreeComponent } from './components/pages/three/three.component'
import { ThreeChildComponent } from './components/pages/three-child/three-child.component'
import { ThreeChildTwoComponent } from './components/pages/three-child-two/three-child-two.component'
import { ThreeChildThreeComponent } from './components/pages/three-child-three/three-child-three.component'

const routes: Routes = [
  {
    path:"",
    component:OneComponent,
    data: { animation: 'PageOne' }
  },
  {
    path:"two",
    data: { animation: 'PageTwo' },
    loadChildren: () =>
      import('./lazy-load/lazy-load.module').then(
        module => module.CreditCardModule
      )
  },
  {
    path:"three",
    data: { animation: 'PageThree' },
    component:ThreeComponent,
    children:[
      {path:"",component:ThreeChildComponent},
      {path:"two",component:ThreeChildTwoComponent},
      {path:"three",component:ThreeChildThreeComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

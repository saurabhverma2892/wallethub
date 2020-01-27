import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './components/pages/one/one.component';
import { ThreeComponent } from './components/pages/three/three.component';
import { NavigationComponent } from './components/layouts/navigation/navigation.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { NgContentExampleComponent } from './components/ng-content-example/ng-content-example.component';
import { ThreeChildComponent } from './components/pages/three-child/three-child.component';
import { ThreeChildTwoComponent } from './components/pages/three-child-two/three-child-two.component';
import { ThreeChildThreeComponent } from './components/pages/three-child-three/three-child-three.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    ThreeComponent,
    NavigationComponent,
    TodoComponent,
    TodoItemComponent,
    NgContentExampleComponent,
    ThreeChildComponent,
    ThreeChildTwoComponent,
    ThreeChildThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger,state,style,animate,transition } from '@angular/animations';
import { slideInAnimation } from './animations/slide-in';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'wallethub';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

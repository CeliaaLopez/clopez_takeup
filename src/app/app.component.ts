import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
@Component({
  selector: 'app-root',
  imports: [NavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Proyecto Sopra Steria';
}

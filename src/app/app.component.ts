import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  imports: [NavComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Proyecto Sopra Steria';
}

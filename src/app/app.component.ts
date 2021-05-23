import { Component,VERSION } from '@angular/core';

@Component({
  selector: 'navbar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngVersion = VERSION;
  title = 'Angular';
}

import { Component } from '@angular/core';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Herzlich Willkommen!';

  active = false;

  constructor() {
    setTimeout(() => { this.title = 'Hallo Welt!'; }, 2000);
  }
}

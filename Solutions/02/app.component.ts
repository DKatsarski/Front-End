import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: string = 'asd';

  isUserEmpty() {
    if (this.user === '') {
      return true;
    }
    return false;
  }

  resetUser() {
    this.user = '';
  }

  onUpdateUsername(event: Event) {
    this.user = (<HTMLInputElement>event.target).value;
  }
}

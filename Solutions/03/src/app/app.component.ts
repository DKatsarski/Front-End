import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myBool = false;
  counterArray = [];
  counter = 1;


  displayStuff(){

    this.myBool === true ? this.myBool = false : this.myBool = true;
    this.incrementNumber()
  }

  incrementNumber () {
    this.counter++;
    this.counterArray.push(this.counter);
  }

  getColor() {
    return this.counterArray.length > 3 ? 'blue' : 'green'
  }
}

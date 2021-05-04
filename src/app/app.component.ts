import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Superhero App';
  teaPot = 'I am a little teapot.';
  description = 'Short and stout.';

  num1 = 5;
  num2 = 7;
  bool = false;
  // num3 = this.num1 + this.num2
}

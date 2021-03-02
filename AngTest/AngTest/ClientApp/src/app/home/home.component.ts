import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  Button_Clicked() {
    console.log("Button has been clicked");
  }
  onChange(searchValue: string): void {
    console.log(searchValue);
  }
}

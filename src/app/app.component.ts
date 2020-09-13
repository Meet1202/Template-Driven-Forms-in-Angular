import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = {first: '', last: ''};
  email = '';
  isDisabled = true;

  onSubmit(f: NgForm) {
    console.log(f.value);  
  }

  setValue() {
    this.name = {first: 'abc', last: 'xyz'};
    this.email = 'abc@rapidops.com'
  }
}

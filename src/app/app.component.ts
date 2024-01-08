import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment 2 Data binding';  
  username = '';
  msg: string = '';
  onSubmitUsername(){
    this.msg = 'User ' + this.username + ' registered successfully.';
    this.username = '';
  }


}

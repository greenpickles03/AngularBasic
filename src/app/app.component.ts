import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBasics';
  message = 'Hello Angular.';
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = false;
  message2 = 'Hello World';
  message3 = "I'm ready only";
  canEdit = false;

  onEditClick(){
    this.canEdit = !this.canEdit;
    if(this.canEdit){
      this.message3 = "You can edit me";
    }else{
      this.message3 = "I'm ready only";
    }
  }

  sayMessage() {
    alert(this.message2)
  }

}

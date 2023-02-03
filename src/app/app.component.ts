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
  varObject = [
    {name: 'Andrew 1'},
    {name: 'Andrew 2'},
    {name: 'Andrew 3'},
    {name: 'Andrew 4'}
  ];
  displayMessage = "";

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

  displayObject (){
    let temp = "";
    this.varObject.map((value) => {
      temp += "," + value.name;
    })
    this.displayMessage = temp.replace(",","");
    return temp;
  }

}

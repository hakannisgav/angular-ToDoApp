import { Component } from '@angular/core';
import { Model, ToDoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();

  getItems(){
    return this.model.items.filter(item => !item.action);
  }

  addItems(text: string){
    if (text != "" && text != null) {
      this.model.items.push(new ToDoItem(text, false));
    }
  }

}

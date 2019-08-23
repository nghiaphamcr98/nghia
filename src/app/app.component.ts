import { Component } from '@angular/core';
import { Model, NghiaItem } from "./model";

@Component({
  selector: 'nghia-app',
  templateUrl: './app.component.html',

})


export class AppComponent
{
  model = new Model();
  
  getName()
  {
    return this.model.user;
  }
  getNghiaItems()
  {
    return this.model.items.filter(item => !item.done);
  }
  addItem(newItem)
  {
    if(newItem != "")
    {
      this.model.items.push(new NghiaItem(newItem,false));
    }
  }
}

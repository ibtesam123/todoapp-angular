import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TodoService } from './services/todo.service';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

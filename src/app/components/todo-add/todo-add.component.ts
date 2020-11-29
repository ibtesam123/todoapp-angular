import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  todoTitle: string = ''
  todoDescription: string = ''

  @Output()
  addTodoEvent = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }

  addTodo() {

    if (this.todoTitle.length == 0 || this.todoDescription.length == 0) {
      window.alert('Title or Description cannot be empty')
      return
    }
    this.addTodoEvent.emit({ title: this.todoTitle, description: this.todoDescription })
    this.todoTitle = ''
    this.todoDescription = ''
  }

}

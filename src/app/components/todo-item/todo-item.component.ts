import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo

  @Output()
  deleteTodoEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo() {
    this.deleteTodoEvent.emit({ id: this.todo.id })
  }

}

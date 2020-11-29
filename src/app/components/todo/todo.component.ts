import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[]

  constructor(
    private readonly todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoService.getAllTodos()
      .subscribe(todoRes => this.todos = todoRes.data)
  }

  addTodo(data: { title: string, description: string }) {
    this.todoService.addTodo(data.title, data.description)
      .subscribe(todoRes => this.todos.push(todoRes.data))
  }


  deleteTodo(data: { id: number }) {
    this.todoService.deleteTodo(data.id)
      .subscribe(_ => this.todos = this.todos.filter(todo => todo.id != data.id))
  }

}

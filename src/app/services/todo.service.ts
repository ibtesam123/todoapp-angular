import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { TodoResponse } from '../models/todo.response';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private readonly http: HttpClient
  ) { }

  baseURL: string = 'http://localhost:3000/todo'
  headers: HttpHeaders = new HttpHeaders({
    'content-type': 'application/json'
  })

  getAllTodos(): Observable<TodoResponse> {
    return this.http.get<TodoResponse>(this.baseURL);
  }

  addTodo(title: string, description: string): Observable<TodoResponse> {
    return this.http.post<TodoResponse>(this.baseURL, {
      title: title,
      description: description,
    }, { headers: this.headers })
  }

  deleteTodo(id: number): Observable<TodoResponse> {
    return this.http.delete<TodoResponse>(this.baseURL + `/${id}`);
  }

}

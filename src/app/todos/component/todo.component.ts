import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: any = [];
  constructor(
    private ts: TodosService
  ) { }

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.todos = [];

    this.ts.getTodos()
      .subscribe(
        // tslint:disable-next-line:no-string-literal
        data => { this.todos.push(...data['body']); },
        error => { console.error(error); }
      );
  }

}

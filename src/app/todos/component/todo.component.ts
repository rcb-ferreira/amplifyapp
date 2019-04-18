import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const url = 'https://mogmujk3qb.execute-api.eu-west-1.amazonaws.com/prod/items';

    this.http.get(url).subscribe(
      data => { this.todos = data; },
      error => { console.error(error); }
    );
  }

}

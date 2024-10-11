import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AddTodoComponent } from "../../components/add-todo/add-todo.component";
import { ListTodosComponent } from "../../components/list-todos/list-todos.component";
import { TodoItemModel } from '../../models/todo-item-model';
import { TodosDataService } from '../../services/todos-data.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [MatCardModule, AddTodoComponent, ListTodosComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  myItems: TodoItemModel[] = [];
  constructor(private todosDataervice: TodosDataService){

  }

  ngOnInit(): void {
    this.myItems = this.todosDataervice.getTodos(4)
  }

  itemAdded(item: TodoItemModel) {
    this.myItems = [...this.myItems, item]
    }
}

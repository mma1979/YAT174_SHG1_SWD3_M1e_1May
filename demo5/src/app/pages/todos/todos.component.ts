import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AddTodoComponent } from "../../components/add-todo/add-todo.component";
import { ListTodosComponent } from "../../components/list-todos/list-todos.component";
import { TodoItemModel } from '../../models/todo-item-model';
import { TodosDataService } from '../../services/todos-data.service';
import { CountStoreService } from '../../stores/count-store.service';
import { TodosClientService } from '../../services/todos-client.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [MatCardModule, AddTodoComponent, ListTodosComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {



  myItems: TodoItemModel[] = [];
  count = 7
  constructor(private todosDataervice: TodosDataService,
     private countStoreService:CountStoreService,
    private client: TodosClientService) {
    this.countStoreService.setCount(this.count) 
    this.countStoreService.count$.subscribe(currentCount => this.count=currentCount)
  }

  ngOnInit(): void {
    
    this.myItems = this.todosDataervice.getTodos(this.count)
    
  }

  itemAdded(item: TodoItemModel) {
    this.myItems = [...this.myItems, item]
  }

  removeItem(item: TodoItemModel) {
    let index = this.myItems.indexOf(item)
    this.myItems.splice(index, 1)
  }
  completeItem(item: TodoItemModel) {
    let index = this.myItems.indexOf(item)
    this.myItems[index].isCompleted=true;
  }

  readDataFromSerer() {
    this.client.getAll().subscribe({
      next: data=>{
        console.table(data)
      },
      error: err=>{
        console.log(err)
      }
    })
    }
}

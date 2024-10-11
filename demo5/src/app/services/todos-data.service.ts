import { Injectable } from '@angular/core';
import { TodoItemModel } from '../models/todo-item-model';

@Injectable({
  providedIn: 'root'
})
export class TodosDataService {

  constructor() { }

  getTodos(count: number): TodoItemModel[]{
    let items: TodoItemModel[] = [];
    for(let i = 1; i <= count; i++){
      items.push({
        id: crypto.randomUUID(),
        description: `My Task #${i}`,
        isCompleted: false
      })
      
    }
    return items;
  }
}

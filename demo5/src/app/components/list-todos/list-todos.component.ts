import { Component, Input, OnInit, Output } from '@angular/core';
import { TodoItemModel } from '../../models/todo-item-model';
import { TodosDataService } from '../../services/todos-data.service';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent  {
 @Input() items: TodoItemModel[] = [];

 @Output() onIemComplete
 @Output() onIemRemove

  
}


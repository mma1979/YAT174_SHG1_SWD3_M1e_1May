import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItemModel } from '../../models/todo-item-model';
import { TodosDataService } from '../../services/todos-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {
  
  @Input() items: TodoItemModel[] = [];

  @Output() onItemComplete = new EventEmitter<TodoItemModel>();
  @Output() onItemRemove = new EventEmitter<TodoItemModel>();


  remove(item: TodoItemModel) {
   this.onItemRemove.emit(item)
  }
  setCompleted(item: TodoItemModel) {
    this.onItemComplete.emit(item)
  }
}


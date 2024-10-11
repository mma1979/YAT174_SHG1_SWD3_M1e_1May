import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { TodoItemModel } from '../../models/todo-item-model';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  taskDescription: string = ''
  @Output() 
  onItemAdd: EventEmitter<TodoItemModel> = new EventEmitter<TodoItemModel>();

  addTodo() {
   let item: TodoItemModel = {
    id: crypto.randomUUID(),
    description: this.taskDescription,
    isCompleted: false
   }

   this.onItemAdd.emit(item);
  }
}

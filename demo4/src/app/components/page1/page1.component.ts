import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {

  @Input() title = 'My Application';
  @Input() data = {
    nid: 2589746,
    name: 'mohammed'
  }

  @Output() onSelectedTypeChange: EventEmitter<string> = new EventEmitter<string>()

  html = '<h1 style="color: navy;"> My Custome HTML</h1>'
  name = "Mohammed";

  types = [
    "text", "tel", "email", "number", "url"
  ]

  selectedType = "number"
  fontSize: number | null = null;

  sayHello() {
    alert("Hello " + this.name)
  }

  sendValueToParent() {
    //logic 
    this.onSelectedTypeChange.emit(this.selectedType);
  }
}

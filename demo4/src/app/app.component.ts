import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Page1Component } from './components/page1/page1.component';
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, Page1Component, HomeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  page1Title = "Page1 Title"
  selectedType = ""
myProdcutId: any|string = "20";

  reciveSelectedType(selectedTypeFromPage1: string) {
    this.selectedType = selectedTypeFromPage1
    alert(this.selectedType)
  }
}

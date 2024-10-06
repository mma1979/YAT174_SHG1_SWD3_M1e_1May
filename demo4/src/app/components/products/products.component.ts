import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(p => this.productId = <number> (p.get('id') || 0))
  }

  productId: number = 0;

  // @Input()
  // set id(pid: number) { 
  //   this.productId = pid
  // }
}

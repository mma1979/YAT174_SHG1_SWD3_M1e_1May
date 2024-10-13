import { Component, OnInit } from '@angular/core';
import { Product } from '../../mdels/product';
import { ProductServiceService } from '../../services/product-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = []

  constructor(private productService : ProductServiceService){}

  loadData(){
    this.productService.getAllProducts().subscribe({
      next: data=>{
        this.products = data;
        console.table(data)
      },
      error: err=>{
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
    this.loadData();
  }
}

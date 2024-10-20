import { Component, OnDestroy } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../../mdels/product';
import { ProductServiceService } from '../../services/product-service.service';
import { Router } from '@angular/router';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnDestroy {
newProduct: Product = <Product> {}

constructor(private productService : ProductServiceService, private router: Router){}

save(form : NgForm){
if(form.invalid){
  alert('please, complete required data')
  return
}

this.productService.createProduct(this.newProduct).subscribe({
  next: data=>{
    // this.router.navigate(['/products'])
  },
  error: err=>{
    if(err.status == 401){
      window.location.href = "/login"
    }
    alert("can not add your product, try again later.")
    console.log(err)
  }
})
}

backToProducts(){
  this.router.navigate(['/products'])
}

ngOnDestroy(): void {
  this.newProduct = <Product>{};
}
}

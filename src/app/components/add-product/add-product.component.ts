import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../../types/product';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [MatButtonModule,FormsModule,MatInputModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
product:Product={
  name:"",
  description:"",
  price:0,
  category:"",
  imageUrl:"",

}
productService=inject(ProductService);
router= inject(Router);

addProduct(){
  console.log("form submitted",this.product);
  this.productService.addProduct(this.product).subscribe(result=>{
    alert("product saved")
    this.router.navigateByUrl("/")
  })
}
}

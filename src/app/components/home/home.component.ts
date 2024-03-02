import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent,CommonModule,SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
   products = [
    {
      id: 1,
      name: "Smartphone",
      description: "A powerful smartphone with advanced features.",
      price: 599.99,
      category: "Electronics",
      imageUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70&crop=false"
    },
    {
      id: 2,
      name: "Laptop",
      description: "A sleek and lightweight laptop for productivity.",
      price: 1099.99,
      category: "Electronics",
      imageUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/c/l/t/-original-imagtucmkuwggepy.jpeg?q=70&crop=false"
    },
    {
      id: 3,
      name: "Running Shoes",
      description: "Comfortable running shoes for your daily workouts.",
      price: 79.99,
      category: "Footwear",
      imageUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=70&crop=false"
    },
    {
      id: 4,
      name: "Coffee Maker",
      description: "A programmable coffee maker for your morning brew.",
      price: 49.99,
      category: "Home & Kitchen",
      imageUrl: "https://rukminim2.flixcart.com/image/612/612/ku79vgw0/coffee-maker/t/v/n/hd7432-20-philips-original-imag7dzytzyyh44v.jpeg?q=70"
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker for music on-the-go.",
      price: 29.99,
      category: "Electronics",
      imageUrl: "https://rukminim2.flixcart.com/image/416/416/kay9bbk0/speaker/mobile-tablet-speaker/c/t/k/wave-120-macjack-original-imafp59pw6fwgatw.jpeg?q=70&crop=false"
    }
  ];
  filteredProduct:any[]=[];
  ngOnInit(): void {
   this.filteredProduct=this.products;
    
  }
  onViewProduct(event:any){
    console.log("on view product",event);
    
  }
  onSearch(search:string){
    console.log("home",search);
    if (search) {
      this.filteredProduct=this.products.filter(x=>x.name.toLowerCase().includes(search.toLowerCase()));
      console.log(this.filteredProduct);
      
    }
    else{
      this.filteredProduct=this.products;
    }
  }
}

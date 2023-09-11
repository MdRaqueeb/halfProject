import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart:any[]=[];

  constructor(private cartService : CartService,private router: Router){}

  total:number=0;
  ngOnInit(): void
    {
        this.cartService.showCart().subscribe((data)=> {
          this.cart = data;
         console.log(this.cart)
        for (const book of this.cart) {
          this.total = this.total + book.price;
        }
        console.log(this.total);});
        
    }

    removeFromCart(id:number){
      console.log("number"+id)
      this.cartService.deleteItem(id).subscribe((data)=>console.log(data));
      window.location.reload();
      
    }
}

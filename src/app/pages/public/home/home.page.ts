import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataSharingService } from "../../../services/data-sharing.services";
import { Product } from "../../../services/globals";
import { CartService } from "../../../services/cart/cart.service";
import { CategoryService } from "src/app/services/category/category.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(
    private route: Router,
    private dataSharingService: DataSharingService,
    private cartService: CartService,
    public categoryServices: CategoryService
  ) {}

  public segment: string = "vegetables";

  ngOnInit() {
    // this.products.quantity = 0;
  }

  products: Product[] = [
    {
      productId: 1,
      name: "Broccoli",
      variant: "1 lbs",
      price: 4.99,
      oldPrice: 5.99,
      quantity: 0,
    },
    {
      productId: 2,
      name: "Orange",
      variant: "1 lbs",
      price: 1.19,
      oldPrice: 1.29,
      quantity: 0,
    },
    {
      productId: 3,
      name: "Milk",
      variant: "1 gal",
      price: 4.99,
      oldPrice: 5.99,
      quantity: 0,
    },
    {
      productId: 4,
      name: "Tomato",
      variant: "1 lbs",
      price: 4.99,
      oldPrice: 5.49,
      quantity: 0,
    },
  ];

  addToCart(product: Product) {
    this.cartService.addToCart(product);

    // Assuming that only "Broccoli" is in the "Green Veggies" category,
    // check if the added product is broccoli and then sum the total value for it.
    if (product.name.toLowerCase() === 'broccoli') {
      // Assuming cartService.cartItems holds the products in your cart.
      const greenVeggiesTotal = this.cartService.cartItems
        .filter(item => item.name.toLowerCase() === 'broccoli')
        .reduce((total, item) => total + (item.price * item.quantity), 0);
        
      if (greenVeggiesTotal > 50) {
        alert("Keep eating your veggies!");
      }
    }
  }

  removeFromCart(product: Product) {
    //console.log("Removing from cart", product);
    this.cartService.removeFromCart(product.productId);
  }
  

  listGreenVeggies() {
    this.route.navigate(["/tabs/category"]);
    this.categoryServices.segmentChanged("vegetables");
    //console.log("clicked veggie");
  }

  listFruits() {
    this.route.navigate(["/tabs/category"]);
    this.categoryServices.segmentChanged("fruits");
  }

  listDairyProducts() {
    this.route.navigate(["/tabs/category"]);
    this.categoryServices.segmentChanged("dairy");
  }

  listFruitsVeggies() {
    this.route.navigate(["/tabs/category"]);
    this.categoryServices.segmentChanged("vegetables");
  }

  listBakeryItems() {
    this.route.navigate(["/tabs/category"]);
    this.categoryServices.segmentChanged("bakery");
  }

  listFineDairyProducts() {
    this.route.navigate(["/tabs/category"]);
    this.categoryServices.segmentChanged("dairy");
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products = [
    {id: 1, name: "Keyboard", price: 1500, location:"Tarlac City", details:"Brandnew"},
    {id: 2, name: "Stainless Steel Pan", price: 1200, location:"Tarlac City", details:"Brandnew"},
    {id: 3, name: "The North Face Jacket", price: 1000, location:"Tarlac City", details:"Brandnew"},
    {id: 4, name: "Kappa Juventus Jersey", price: 1500, location:"Tarlac City", details:"Brandnew"},
    {id: 5, name: "Carhartt Jacket", price: 7500, location:"Tarlac City", details:"Brandnew"},

  ]

}

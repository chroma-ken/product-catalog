import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [CommonModule,RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  productId: number | null = null;
  product: any = null

  products = [
    {id:1, name: "Keyboard", price: 1500, location:"Tarlac City", details:"Brandnew"},
    {id:2, name: "Stainless Steel Pan", price: 1200, location:"Tarlac City", details:"Brandnew"},
    {id:3, name: "The North Face Jacket", price: 1000, location:"Tarlac City", details:"Brandnew"},
    {id:4, name: "Kappa Juventus Jersey", price: 1500, location:"Tarlac City", details:"Brandnew"},
    {id:5, name: "Carhartt Jacket", price: 7500, location:"Tarlac City", details:"Brandnew"},

  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id == this.productId);
  }
}



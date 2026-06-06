import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  products = [
    {
      productName: 'Milk',
      unitPrice: 50,
      availableQuantity: 500
    },

    {
      productName: 'Curd',
      unitPrice: 60,
      availableQuantity: 200
    },

    {
      productName: 'Paneer',
      unitPrice: 350,
      availableQuantity: 50
    },

    {
      productName: 'Butter',
      unitPrice: 450,
      availableQuantity: 25
    }
  ];

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  newProductName = '';

  newProductPrice = 0;

  newProductQuantity = 0;

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
    }

  ];

  addProduct() {

    if (
      this.newProductName.trim() === '' ||
      this.newProductPrice <= 0 ||
      this.newProductQuantity <= 0
    ) {

      alert('Please enter valid product details');

      return;
    }

    this.products.push({

      productName: this.newProductName,

      unitPrice: this.newProductPrice,

      availableQuantity: this.newProductQuantity

    });

    this.newProductName = '';

    this.newProductPrice = 0;

    this.newProductQuantity = 0;

  }

  deleteProduct(index: number) {

    this.products.splice(index, 1);

  }

}
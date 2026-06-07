import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../../../models/customer';
import { CustomerService } from '../../../services/customer.service';


@Component({
  selector: 'app-customers',
  imports: [CommonModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css'
})
export class Customers {

  customers: Customer[] = [];

  constructor(
    private customerService: CustomerService
  ) {}

  ngOnInit() {

    this.customers =
      this.customerService.getCustomers();

  }

}
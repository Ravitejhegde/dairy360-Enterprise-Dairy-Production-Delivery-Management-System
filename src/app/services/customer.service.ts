import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customers: Customer[] = [

    {
      customerId: 1,
      customerName: 'Ravi Hegde',
      phoneNumber: '9876543210',
      address: 'Sirsi',
      route: 'Route A',
      status: 'Approved'
    },

    {
      customerId: 2,
      customerName: 'Anil Kumar',
      phoneNumber: '9876543211',
      address: 'Hubli',
      route: 'Route B',
      status: 'Pending'
    },
    {
      customerId: 3,
      customerName: 'Priya Sharma',
      phoneNumber: '9876543212',
      address: 'Mumbai',
      route: 'Route C',
      status: 'Approved'
    }

  ];

  getCustomers(): Customer[] {

    return this.customers;

  }

  addCustomer(customer: Customer): void {

    this.customers.push(customer);

  }

  deleteCustomer(customerId: number): void {

    this.customers = this.customers.filter(
      customer => customer.customerId !== customerId
    );

  }

}
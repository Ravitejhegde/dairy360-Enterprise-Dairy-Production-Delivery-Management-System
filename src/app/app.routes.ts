import { Routes } from '@angular/router';
import {Dashboard} from './features/admin/dashboard/dashboard';
import {Products} from './features/admin/products/products'; 
import {Sidebar} from './core/sidebar/sidebar';
import {Customers} from './features/admin/customers/customers';
import {Orders} from './features/admin/orders/orders';
import {Inventory} from './features/admin/inventory/inventory';
import {Delivery} from './features/admin/delivery/delivery';
import {Reports} from './features/admin/reports/reports';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    component: Dashboard
  },

  {
    path: 'products',
    component: Products
  },

  {
    path: 'customers',
    component: Customers
  },

  {
    path: 'orders',
    component: Orders
  },

  {
    path: 'inventory',
    component: Inventory
  },

  {
    path: 'delivery',
    component: Delivery
  },

  {
    path: 'reports',
    component: Reports
  }

];

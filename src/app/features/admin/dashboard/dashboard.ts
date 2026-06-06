import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  customerCount = 1250;
  todayOrderCount = 842;
  dailyMilkProductionLiters = 1100;
  todayRevenueAmount = 52400;
  lowStockAlertCount = 3;
}

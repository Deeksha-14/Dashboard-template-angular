import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SalesData, DashboardStats } from '../models/sales.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  getSalesData(): Observable<SalesData[]> {
    const mockData: SalesData[] = [
      { month: 'Jan', revenue: 45000, orders: 120, customers: 89 },
      { month: 'Feb', revenue: 52000, orders: 145, customers: 102 },
      { month: 'Mar', revenue: 48000, orders: 132, customers: 95 },
      { month: 'Apr', revenue: 61000, orders: 168, customers: 118 },
      { month: 'May', revenue: 55000, orders: 151, customers: 108 },
      { month: 'Jun', revenue: 67000, orders: 189, customers: 134 }
    ];
    
    return of(mockData);
  }

  getDashboardStats(): Observable<DashboardStats> {
    const stats: DashboardStats = {
      totalRevenue: 328000,
      totalOrders: 905,
      totalCustomers: 646,
      totalProducts: 156,
      revenueGrowth: 12.5,
      ordersGrowth: 8.3
    };
    
    return of(stats);
  }
}
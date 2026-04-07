export interface SalesData {
  month: string;
  revenue: number;
  orders: number;
  customers: number;
}

export interface DashboardStats {
  totalRevenue: number;
  totalOrders: number;
  totalCustomers: number;
  totalProducts: number;
  revenueGrowth: number;
  ordersGrowth: number;
}
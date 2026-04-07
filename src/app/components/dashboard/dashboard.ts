import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from '../stat-card/stat-card';
import { SalesChartComponent } from '../sales-chart/sales-chart';
import { DashboardStats } from '../../models/sales.model';
import { SalesService } from '../../services/sales';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    StatCardComponent,
    SalesChartComponent
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  stats: DashboardStats | null = null;
  loading: boolean = true;

  constructor(private salesService: SalesService) { }

  ngOnInit(): void {
    this.loadDashboardStats();
  }

  loadDashboardStats(): void {
    this.salesService.getDashboardStats().subscribe({
      next: (data) => {
        this.stats = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading stats:', error);
        this.loading = false;
      }
    });
  }
}
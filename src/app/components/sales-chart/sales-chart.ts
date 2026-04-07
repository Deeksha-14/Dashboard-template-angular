import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { SalesService } from '../../services/sales';

@Component({
  selector: 'app-sales-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './sales-chart.html',
  styleUrl: './sales-chart.css'
})
export class SalesChartComponent implements OnInit {
  
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Revenue ($)',
        fill: true,
        tension: 0.4,
        borderColor: '#3498db',
        backgroundColor: 'rgba(52, 152, 219, 0.1)'
      },
      {
        data: [],
        label: 'Orders',
        fill: true,
        tension: 0.4,
        borderColor: '#2ecc71',
        backgroundColor: 'rgba(46, 204, 113, 0.1)'
      }
    ]
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  public lineChartLegend = true;

  constructor(private salesService: SalesService) { }

  ngOnInit(): void {
    this.loadSalesData();
  }

  loadSalesData(): void {
    this.salesService.getSalesData().subscribe({
      next: (data) => {
        this.lineChartData.labels = data.map(item => item.month);
        this.lineChartData.datasets[0].data = data.map(item => item.revenue);
        this.lineChartData.datasets[1].data = data.map(item => item.orders);
      },
      error: (error) => {
        console.error('Error loading sales data:', error);
      }
    });
  }
}
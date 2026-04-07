import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.css'
})
export class StatCardComponent {
  @Input() title: string = '';
  @Input() value: string | number = 0;
  @Input() icon: string = '📊';
  @Input() trend: number = 0;
  @Input() color: string = '#3498db';
}
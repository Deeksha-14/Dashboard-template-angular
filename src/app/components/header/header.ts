import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  currentUser = {
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=12'
  };

  notifications = 5;
}
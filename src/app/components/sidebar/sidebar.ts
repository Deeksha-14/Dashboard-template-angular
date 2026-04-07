import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {
  menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: '📊', route: '/dashboard' },
    { label: 'Products', icon: '📦', route: '/products' },
    { label: 'Users', icon: '👥', route: '/users' }
  ];
}
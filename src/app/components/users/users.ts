import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  loading: boolean = true;
  selectedUser: User | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading users:', error);
        this.loading = false;
      }
    });
  }

  viewUserDetails(user: User): void {
    this.selectedUser = user;
  }

  closeModal(): void {
    this.selectedUser = null;
  }
}
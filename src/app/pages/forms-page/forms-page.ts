import { Component } from '@angular/core';
import { UserFormComponent } from '../../components/user-form/user-form';

@Component({
  selector: 'app-forms-page',
  standalone: true,
  imports: [UserFormComponent],
  templateUrl: './forms-page.html',
  styleUrl: './forms-page.css'
})
export class FormsPageComponent {

}
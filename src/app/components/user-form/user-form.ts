import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  FormBuilder, 
  FormGroup, 
  FormControl, 
  Validators, 
  ReactiveFormsModule 
} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // IMPORTANT: Import these
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  submitted = false;
  countries = ['USA', 'UK', 'Canada', 'Australia', 'India', 'Germany', 'France'];
  skills = [
    { name: 'Angular', checked: false },
    { name: 'React', checked: false },
    { name: 'Vue', checked: false },
    { name: 'Node.js', checked: false },
    { name: 'Python', checked: false }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Initialize the form
    this.userForm = this.fb.group({
      // Basic validations
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      
      // Email validation
      email: ['', [Validators.required, Validators.email]],
      
      // Phone validation with pattern
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      
      // Password with minimum length
      password: ['', [Validators.required, Validators.minLength(6)]],
      
      // Dropdown
      country: ['', Validators.required],
      
      // Radio button
      gender: ['', Validators.required],
      
      // Checkbox
      terms: [false, Validators.requiredTrue],
      
      // Textarea
      bio: ['', [Validators.maxLength(200)]],
      
      // Number input
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      
      // Date input
      dateOfBirth: ['', Validators.required]
    });
  }

  // Getter for easy access to form controls in template
  get f() {
    return this.userForm.controls;
  }

  // Check if field has error
  hasError(fieldName: string, errorType: string): boolean {
    const field = this.userForm.get(fieldName);
    return !!(field && field.hasError(errorType) && (field.dirty || field.touched || this.submitted));
  }

  // On form submit
  onSubmit() {
    this.submitted = true;

    // Stop if form is invalid
    if (this.userForm.invalid) {
      console.log('Form is invalid!');
      // Mark all fields as touched to show errors
      Object.keys(this.userForm.controls).forEach(key => {
        this.userForm.get(key)?.markAsTouched();
      });
      return;
    }

    // Success! Get form data
    console.log('✅ Form Submitted Successfully!');
    console.log('Form Data:', this.userForm.value);
    
    // Show success message
    alert('Form submitted successfully! Check console for data.');
    
    // Reset form
    // this.resetForm();
  }

  // Reset form
  resetForm() {
    this.submitted = false;
    this.userForm.reset();
  }

  // Prefill form (for testing)
  fillTestData() {
    this.userForm.patchValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      password: 'password123',
      country: 'USA',
      gender: 'male',
      terms: true,
      bio: 'Full stack developer with 5 years of experience.',
      age: 28,
      dateOfBirth: '1996-01-15'
    });
  }
}
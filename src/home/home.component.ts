import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../user';// Import the User interface
import { PostDataService } from '../post-data.service';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})

export class HomeComponent {

  // response: any;
  // error: any;  // To store any error encountered

  // private http= inject(HttpClient);
  private formBuilder = inject(FormBuilder);
  private postDataService = inject(PostDataService);

  profileForm = this.formBuilder.group({
    name: ["", Validators.required],
    age: [null, [Validators.required, Validators.min(1), this.ageValidator()]]
  })

  getname() {
    return this.profileForm.get("name")
  }

  getAge() {
    return this.profileForm.get("age")
  }

  // Custom validator to ensure age is either a valid number or null
  ageValidator() {
    return (control: any) => {
      if (control.value === null || control.value === '') {
        return null; // Valid when the field is empty (null)
      }
      if (isNaN(control.value)) {
        return { invalidAge: true }; // Invalid if not a number
      }
      return null; // Valid if a number is entered
    };
  }

  onProfileFormSubmit() {
    if (this.profileForm.valid) {
      // console.log(this.profileForm.value)
      const formData: User = {
        name: this.profileForm.value.name || '',  // Fallback to empty string if name is null or undefined
        age: this.profileForm.value.age ? +this.profileForm.value.age : null, // Convert to number or null
      };
      // const formData: User = this.profileForm.value;
      this.postDataService.postUser(formData).subscribe({
        next: (response) => {
          console.log('Data submitted successfully:', response);
          // this.response = response;  // Store response to display
        },
        error: (err) => {
          console.error('Error occurred:', err);
          // this.error = err;  // Store error to display
        },
        complete: () => {
          console.log('POST request completed!');
          this.profileForm.reset()
        }
      });
    }
    else {
      console.log('Form is not valid');
    }

  }

}

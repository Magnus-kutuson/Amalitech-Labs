import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-button',
  imports: [ReactiveFormsModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  /**
   * Handles the form submission. 
   * If the form is valid, logs the form values to the console.
   * Otherwise, logs an error message indicating the form is invalid.
   * @remarks
   * This method is used to handle the form submission event.
   * It checks if the form is valid and logs the form values to the console if it is.
   * If the form is invalid, it logs an error message to the console.
   */
//   onSubmit() {
//     if (this.userForm.valid) {
//       // Log the form values to the console if the form is valid
//       console.log(this.userForm.value);
//     } else {
//       // Log an error message to the console if the form is invalid
//       console.error('Form is invalid');
//     }
//   } 
}

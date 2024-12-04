import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
   profileForm = new FormGroup({
      name: new FormGroup('', Validators.required),
      email: new FormGroup('', [Validators.required, Validators.email]),
      phone: new FormGroup('', Validators.required),
    })
  }



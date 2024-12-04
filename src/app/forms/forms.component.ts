import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
protected name = new FormControl<string>('', Validators.required)
protected email = new FormControl<any>('', Validators.required)
protected phone = new FormControl<string>('', Validators.required)
}

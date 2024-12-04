import { Component } from '@angular/core';
import { FormsComponent } from '../forms/forms.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  imports: [FormsComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
}

import { Component } from '@angular/core';
import { FormsComponent } from '../forms/forms.component';
import { ButtonComponent } from '../button/button.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [FormsComponent, ButtonComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
}

import { Component } from '@angular/core';
import { FormsComponent } from '../forms/forms.component';
import { ButtonComponent } from '../button/button.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { OptionsComponent } from '../options/options.component';
import { ServicesComponent } from '../services/services.component';
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'app-header',
  imports: [FormsComponent, ButtonComponent, RouterOutlet, RouterLink, RouterLinkActive, OptionsComponent, ServicesComponent, SummaryComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
}

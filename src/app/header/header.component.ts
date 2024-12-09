import { Component } from '@angular/core';
import { FormsComponent } from '../forms/forms.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
// import { OptionsComponent } from '../options/options.component';
// import { ServicesComponent } from '../services/services.component';
// import { SummaryComponent } from '../summary/summary.component';
// import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [FormsComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
}


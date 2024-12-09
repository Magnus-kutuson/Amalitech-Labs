import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsComponent} from './forms/forms.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FormsComponent, RouterModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multi-step-form';
}

import { Routes, Route} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsComponent } from './forms/forms.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: HeaderComponent, title: 'Your info', 
        children: [
        { path: 'step1', component: FormsComponent, title: 'Your info' },
    ]},

];

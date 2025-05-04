import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { BustrackingComponent } from './bus-tracking/bus-tracking.component';
import { LineInfosComponent } from './line-infos/line-infos.component';
import { ReclamationComponent } from './reclamation/reclamation.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'lineinfos', component: LineInfosComponent },
  { path: 'bus-tracking', component: BustrackingComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'reclamation', component: ReclamationComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
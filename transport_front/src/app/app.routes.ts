import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { BusTrackingComponent } from './bus-tracking/bus-tracking.component';
import { LineInfosComponent } from './line-infos/line-infos.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ListLinesComponent } from './line-infos/list-lines/list-lines.component';
import { AddInfosComponent } from './line-infos/add-infos/add-infos.component';
import { ListTrackingsComponent } from './bus-tracking/list-trackings/list-trackings.component';
import { AddTrackingComponent } from './bus-tracking/add-tracking/add-tracking.component';
import { ListReclamationsComponent } from './reclamation/list-reclamations/list-reclamations.component';
import { AddReclamationComponent } from './reclamation/add-reclamation/add-reclamation.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'lineinfos', component: LineInfosComponent },
  { path: 'bus-tracking', component: BusTrackingComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'reclamation', component: ReclamationComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'lineinfos/list-lines', component: ListLinesComponent },
  { path: 'lineinfos/add-infos', component: AddInfosComponent },
  { path: 'bus-tracking/list-trackings', component: ListTrackingsComponent },
  { path: 'bus-tracking/add-tracking', component: AddTrackingComponent },
  { path: 'reclamation/list-reclamations', component: ListReclamationsComponent },
  { path: 'reclamation/add-reclamation', component: AddReclamationComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
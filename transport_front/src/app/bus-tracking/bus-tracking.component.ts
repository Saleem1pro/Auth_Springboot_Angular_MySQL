import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { ClickOutsideDirective } from '../directives/click-outside.directive';
import { AddTrackingComponent } from './add-tracking/add-tracking.component';
import { ListTrackingsComponent } from './list-trackings/list-trackings.component';

@Component({
  selector: 'app-bustracking',
  templateUrl: './bus-tracking.component.html',
  styleUrl:'./bus-tracking.component.css',
  imports: [CommonModule, FormsModule, ListTrackingsComponent, AddTrackingComponent,ClickOutsideDirective],
  standalone: true
})

export class BusTrackingComponent {
  
constructor(
    private router: Router
  ){
}
showList: boolean = false;
showForm: boolean = false;

  onListTrackings() {
    this.showList = !this.showList;
    this.showForm = false; // Cache le formulaire si visible 
  }

  onAddTracking() {
    this.showForm = !this.showForm;
    this.showList = false; // Cache la liste si visible
  }

  unCheck(){
    this.showList = false;
    this.showForm = false;
  }

  onReturn(){
   this.router.navigate(['/welcome']); 
  }
  

}

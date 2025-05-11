import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { ClickOutsideDirective } from '../directives/click-outside.directive';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { ListReclamationsComponent } from './list-reclamations/list-reclamations.component';
@Component({
  selector: 'app-reclamation',
  imports: [CommonModule, FormsModule, ListReclamationsComponent, AddReclamationComponent,ClickOutsideDirective],
  templateUrl: './reclamation.component.html',
  styleUrl: './reclamation.component.css'
})
export class ReclamationComponent {

  
constructor(
    private router: Router
  ){
}
showList: boolean = false;
showForm: boolean = false;

  onListReclamations() {
    this.showList = !this.showList;
    this.showForm = false; // Cache le formulaire si visible 
  }

  onAddReclamation() {
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

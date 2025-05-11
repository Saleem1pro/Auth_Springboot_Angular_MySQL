import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { ListLinesComponent } from "./list-lines/list-lines.component";
import { AddInfosComponent } from "./add-infos/add-infos.component";
import { ClickOutsideDirective } from '../directives/click-outside.directive';

@Component({
  selector: 'app-line-infos',
  imports: [CommonModule, FormsModule, ListLinesComponent, AddInfosComponent,ClickOutsideDirective],
  templateUrl: './line-infos.component.html',
  styleUrl: './line-infos.component.css',
  standalone: true
})
export class LineInfosComponent {
  
constructor(
    private router: Router
  ){
}
showList: boolean = false;
showForm: boolean = false;

  onListInfo() {
    this.showList = !this.showList;
    this.showForm = false; // Cache le formulaire si visible
  }

  onAddLineInfo() {
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

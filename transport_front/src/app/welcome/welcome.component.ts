import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import ajouté

@Component({
  selector: 'app-welcome',
  imports: [FormsModule,CommonModule,],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

export class WelcomeComponent {

  constructor(
    private router: Router
  ){
}
onReclamation() {
  this.router.navigate(['/reclamation']);
}
onLineInfos() {
  this.router.navigate(['/lineinfos']);
}
onBusTracking() :void{
  this.router.navigate(['/bus-tracking']);

}

}

import { Component, Output, EventEmitter, Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [FormsModule, CommonModule/*,LoginComponent*/],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


export class RegisterComponent {

  message: string = '';
  messageType: 'success' | 'error' | null = null;
  @Output() onSubmitRegisterEvent = new EventEmitter();
  @Input() active: string = "register";

  constructor(
    private axiosService: AxiosService,
    protected router: Router
  ) {}
  showPassword = false;

  registerFirstName: string = "";
  registerLastName: string = "";
  registerLogin: string = "";
  registerPassword: string = "";

  onRegisterTab(): void {
    this.active = "register";
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
}

  onSubmitRegister(): void {
    this.axiosService.request('POST', '/api/auth/register', {
      firstName: this.registerFirstName,
      lastName: this.registerLastName,
      login: this.registerLogin,
      password: this.registerPassword
    }).then(response => {
      if (response.status === 201 || 200) {
        this.message = 'Enregistrement réussi ! Redirection dans 5 secondes...';
        this.messageType = 'success';
        
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 5000);
      } else {
        this.showError('Erreur lors de l\'enregistrement');
      }
    }).catch(error => {
      this.showError(error.response?.data?.message || 'Erreur inconnue');
    });
  }

  private showError(message: string): void {
    this.message = message;
    this.messageType = 'error';
    setTimeout(() => this.message = '', 5000); // Effacer après 5s
  }
}





import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Import ajouté
import { AxiosService } from '../axios.service'; // Import ajouté

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();
  @Input() active: string = "login";

  // Variables pour le formulaire register
  registerFirstName: string = "";
  registerLastName: string = "";
  registerLogin: string = "";
  registerPassword: string = "";

  // Variables pour le formulaire login
  login: string = "";
  password: string = "";

  // Ajout du constructeur avec Router et AxiosService
  constructor(
    private router: Router,
    private axiosService: AxiosService
  ) {}

  showLoginPassword = false;

  toggleShowLoginPassword() {
    this.showLoginPassword = !this.showLoginPassword;
}


  onLoginTab(): void {
    this.active = "login";
  }

  

  onRegister():void{
    this.router.navigate(['/register']);
  }
  onSubmitLogin(): void {
    // Appel direct au service axios
    this.axiosService.request(
      "POST",
      "/api/auth/login",
      {
        login: this.login,
        password: this.password
      }
    ).then(response => {
      if (response.status === 200) {
        this.router.navigate(['/welcome']); // Redirection après succès
      }
    }).catch(error => {
      console.error("Erreur de connexion:", error);
    });

    // Émission de l'événement si nécessaire pour d'autres composants
    this.onSubmitLoginEvent.emit({
      login: this.login,
      password: this.password
    });
  }

  onSubmitRegister(): void {
    this.onSubmitRegisterEvent.emit({
      firstName: this.registerFirstName,
      lastName: this.registerLastName,
      login: this.registerLogin,
      password: this.registerPassword
    });
  }
}
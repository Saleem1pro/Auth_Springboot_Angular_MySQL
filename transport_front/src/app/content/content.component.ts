import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Ajouter cette importation
import { LoginComponent } from "../login/login.component";
import { AxiosService } from '../axios.service';
import { WelcomeComponent } from '../welcome/welcome.component';
import { RegisterComponent } from "../register/register.component";
@Component({
  selector: 'app-content',
  imports: [/*LoginComponent,*/ RegisterComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  [x: string]: any;
  activeTab!: string;

  constructor(
    private axiosService: AxiosService,
    private router: Router // Ajouter ceci

  ){}
  
  onLogin(input: any): void {
    this.axiosService.request(
      "POST",
      "/api/auth/login", 
      {
        login: input.login,
        password: input.password
      }
    ).then(response => {
      if (response.status === 200) {
        this.router.navigate(['/welcome']); // Redirection
      }
    }).catch(error => {
      console.error("Login failed:", error);
    });
  }
  onRegister(input:any): void{
    this.axiosService.request(
      "POST",
      "/register",
      {
        firstName:input.firstName,
        lastName:input.lastName,
        login:input.login,
        password:input.password
      }
    );
  }

}

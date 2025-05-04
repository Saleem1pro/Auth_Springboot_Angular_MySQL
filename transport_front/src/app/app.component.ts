import { Component } from '@angular/core';
import { AxiosService } from './axios.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: any;
  
  constructor(
    private axiosService: AxiosService,

  ) {}


  onLogin(credentials: { login: string; password: string }) {
    this.axiosService.request(
      "POST",
      "/api/auth/login", // ✅ Endpoint de login
      credentials
    ).then(response => {
      console.log("Login réussi", response);
    });
  }

  onRegister(details: { 
    firstName: string; 
    lastName: string; 
    login: string; 
    password: string 
  }) {
    this.axiosService.request(
      "POST",
      "/api/auth/register", // 🚨 Correction cruciale ici
      details
    ).then(response => {
      console.log("Inscription réussie", response);
    });
  }

  
}
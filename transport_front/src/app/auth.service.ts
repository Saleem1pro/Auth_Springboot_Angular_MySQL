import { Injectable } from '@angular/core';
import { AxiosService } from './axios.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private axiosService: AxiosService,
    private router: Router
  ) {}

  // Modification 1: Ajouter le type de retour explicite
  register(userData: any): Promise<void> {
    return this.axiosService.request('POST', '/api/auth/register', userData)
      .then(() => {
        this.router.navigate(['/login']); 
        return undefined; // Forcer le retour void
      });
  }

  // Modification 2: Même principe pour login
  login(credentials: any): Promise<void> {
    return this.axiosService.request('POST', '/api/auth/login', credentials)
      .then(() => {
        this.router.navigate(['/welcome']);
        return undefined;
      });
  }
}
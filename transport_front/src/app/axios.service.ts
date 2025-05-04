import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() {
    axios.defaults.baseURL = "http://localhost:8080";
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.withCredentials = true; // ⚠️ Important pour les cookies
  }

  request(method: string, url: string, data: any): Promise<any> {
    return axios({
      method: method.toLowerCase(), // Convertir en minuscules pour compatibilité
      url: url,
      data: data
    });
  }
}
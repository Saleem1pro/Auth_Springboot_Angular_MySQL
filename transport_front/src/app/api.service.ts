// api.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bustracking } from './model/bustracking';
import { LineInfos } from './model/lineinfos';
import { Reclamation } from './model/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  updateReclamation(reclamations: Reclamation) {
    return this.http.put(`${this.baseUrl}/reclamation/${reclamations.id}`, reclamations);
  }
  updateLine(lines: LineInfos) {
    return this.http.put(`${this.baseUrl}/lineinfos/${lines.id}`, lines);
  }
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getReclamation() {
    return this.http.get(`${this.baseUrl}/reclamation`);
  }
  createReclamation(reclamations: Partial<Reclamation>) {
    return this.http.post(`${this.baseUrl}/reclamation`, reclamations, {
      headers: { 'Content-Type': 'application/json' }
    });
  }


  getLines() {
    return this.http.get(`${this.baseUrl}/lineinfos`);
  }
  createLine(lines: Partial<LineInfos>) {
    return this.http.post(`${this.baseUrl}/lineinfos`, lines, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  createBus(bus: Partial<Bustracking>) {
    return this.http.post(`${this.baseUrl}/bus-tracking`, bus, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  deleteBus(busId: number) {
    return this.http.delete(`${this.baseUrl}/${busId}`);
  }
  getBusStats() {
    return this.http.get<Bustracking[]>(`${this.baseUrl}/bus-tracking`);
  }
  updateBus(bus: Bustracking) {
    return this.http.put(`${this.baseUrl}/bus-tracking/${bus.id}`, bus);
  }
} 
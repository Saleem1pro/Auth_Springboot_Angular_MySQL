import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { Bustracking } from '../model/bustracking';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bustracking',
  templateUrl: './bus-tracking.component.html',
  imports: [CommonModule,FormsModule],
  standalone: true
})
export class BustrackingComponent implements OnInit {
  busList: Bustracking[] = [];
  newBus: Partial<Bustracking> = {
    bus_state: 2,
    bus_on: 0,
    bus_off: 0,
    bus_on_time: 0,
    bus_late: 0,
    bus_on_accident: 0,
    change_of_line: 0,
    date:new Date()
  };
  selectedBus: Bustracking | null = null;
  @Output() onaddBus = new EventEmitter();

  isSaving = false; // Ajoutez cette variable de classe
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadBuses();
  }

  loadBuses() {
    this.apiService.getBusStats().subscribe({
      next: (data) => this.busList = data,
      error: (err) => console.error('Error loading buses:', err)
    });
  }

  addBus() {
    // Vérification des données avant envoi
    console.log('Données envoyées:', this.newBus);
    
    this.apiService.createBus(this.newBus).subscribe({
      next: (response) => {
        console.log('Réponse du serveur:', response);
        this.loadBuses();
        this.newBus = { 
          bus_state: 0,
          bus_on: 0,
          bus_off: 0,
          bus_on_time: 0,
          bus_late: 0,
          bus_on_accident: 0,
          change_of_line: 0,
          date:new Date()
        };
      },
      error: (err) => {
        console.error('Erreur complète:', err);
        if (err.error) console.error('Détails:', err.error);
      }
    });
  }

  editBus(bus: Bustracking) {
    this.selectedBus = { ...bus };
  }

  updateBus() {
    if (this.selectedBus) {
      this.apiService.updateBus(this.selectedBus).subscribe({
        next: () => {
          this.loadBuses();
          this.selectedBus = null;
        },
        error: (err) => console.error('Error updating bus:', err)
      });
    }
  }

// Getters/Setters pour le two-way binding
get busStateValue(): number {
  return this.selectedBus?.bus_state ?? this.newBus.bus_state!;
}
set busStateValue(value: number) {
  if (this.selectedBus) this.selectedBus.bus_state = value;
  else this.newBus.bus_state = value;
}

get busOnValue(): number {
  return this.selectedBus?.bus_on ?? this.newBus.bus_on!;
}
set busOnValue(value: number) {
  if (this.selectedBus) this.selectedBus.bus_on = value;
  else this.newBus.bus_on = value;
}

get busOffValue(): number {
  return this.selectedBus?.bus_off ?? this.newBus.bus_off!;
}
set busOffValue(value: number) {
  if (this.selectedBus) this.selectedBus.bus_off = value;
  else this.newBus.bus_off = value;
}

// Ajoutez les mêmes getters/setters pour les autres champs
get busOnTimeValue(): number {
  return this.selectedBus?.bus_on_time ?? this.newBus.bus_on_time!;
}
set busOnTimeValue(value: number) {
  if (this.selectedBus) this.selectedBus.bus_on_time = value;
  else this.newBus.bus_on_time = value;
}

get busLateValue(): number {
  return this.selectedBus?.bus_late ?? this.newBus.bus_late!;
}
set busLateValue(value: number) {
  if (this.selectedBus) this.selectedBus.bus_late = value;
  else this.newBus.bus_late = value;
}

get busAccidentValue(): number {
  return this.selectedBus?.bus_on_accident ?? this.newBus.bus_on_accident!;
}
set busAccidentValue(value: number) {
  if (this.selectedBus) this.selectedBus.bus_on_accident = value;
  else this.newBus.bus_on_accident = value;
}

get changeLineValue(): number {
  return this.selectedBus?.change_of_line ?? this.newBus.change_of_line!;
}
set changeLineValue(value: number) {
  if (this.selectedBus) this.selectedBus.change_of_line = value;
  else this.newBus.change_of_line = value;
}

get dateValue(): Date {
  return this.selectedBus?.date ?? this.newBus.date!;
}
set dateValue(value: Date) {
  if (this.selectedBus) this.selectedBus.date = value;
  else this.newBus.date = value;
}



}
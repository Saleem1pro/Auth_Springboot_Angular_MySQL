import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { Bustracking } from '../../model/bustracking';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-list-trackings',
  imports: [CommonModule,FormsModule],
  templateUrl: './list-trackings.component.html',
  styleUrl: './list-trackings.component.css'
})
export class ListTrackingsComponent {


  busList: Bustracking[] = [];
  newBus: Partial<Bustracking> = {
    busState: 0,
    busOn: 0,
    busOff: 0,
    busOnTime: 0,
    busLate: 0,
    busOnAccident: 0,
    changeofLine: 0,
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

  

  

// Getters/Setters pour le two-way binding
get busStateValue(): number {
  return this.selectedBus?.busState ?? this.newBus.busState!;
}
set busStateValue(value: number) {
  if (this.selectedBus) this.selectedBus.busState = value;
  else this.newBus.busState = value;
}

get busOnValue(): number {
  return this.selectedBus?.busOn ?? this.newBus.busOn!;
}
set busOnValue(value: number) {
  if (this.selectedBus) this.selectedBus.busOn = value;
  else this.newBus.busOn = value;
}

get busOffValue(): number {
  return this.selectedBus?.busOff ?? this.newBus.busOff!;
}
set busOffValue(value: number) {
  if (this.selectedBus) this.selectedBus.busOff = value;
  else this.newBus.busOff = value;
}

// Ajoutez les mêmes getters/setters pour les autres champs
get busOnTimeValue(): number {
  return this.selectedBus?.busOnTime ?? this.newBus.busOnTime!;
}
set busOnTimeValue(value: number) {
  if (this.selectedBus) this.selectedBus.busOnTime = value;
  else this.newBus.busOnTime = value;
}

get busLateValue(): number {
  return this.selectedBus?.busLate ?? this.newBus.busLate!;
}
set busLateValue(value: number) {
  if (this.selectedBus) this.selectedBus.busLate = value;
  else this.newBus.busLate = value;
}

get busAccidentValue(): number {
  return this.selectedBus?.busOnAccident ?? this.newBus.busOnAccident!;
}
set busAccidentValue(value: number) {
  if (this.selectedBus) this.selectedBus.busOnAccident = value;
  else this.newBus.busOnAccident = value;
}

get changeLineValue(): number {
  return this.selectedBus?.changeofLine ?? this.newBus.changeofLine!;
}
set changeLineValue(value: number) {
  if (this.selectedBus) this.selectedBus.changeofLine = value;
  else this.newBus.changeofLine = value;
}

get dateValue(): Date {
  return this.selectedBus?.date ?? this.newBus.date!;
}
set dateValue(value: Date) {
  if (this.selectedBus) this.selectedBus.date = value;
  else this.newBus.date = value;
}



}
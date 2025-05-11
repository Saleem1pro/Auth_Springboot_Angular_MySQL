import { LineInfos } from '../../model/lineinfos';
import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-infos',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-infos.component.html',
  styleUrl: './add-infos.component.css'
})
export class AddInfosComponent {
//lineInfosList: LineInfos[] = [];
  lineInfosList :any;
  newLine: Partial<LineInfos> = {
    lineNumber: 0,
    numberOfBuses: 0,
    working: 0,
    notWorking: 0,
    date:new Date()
  };
  selectedLine: LineInfos | null = null;
  @Output() onaddLine = new EventEmitter();

  isSaving = false; // Ajoutez cette variable de classe
  lines: any;
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.loadLines();
  }

  loadLines() {
    this.apiService.getLines().subscribe({
      next: (data) => this.lineInfosList = data,
      error: (err) => console.error('Error loading lines:', err)
    });
  }

  addLine() {
    // Vérification des données avant envoi
    console.log('Données envoyées:', this.newLine);
    
    this.apiService.createLine(this.newLine).subscribe({
      next: (response: any) => {
        console.log('Réponse du serveur:', response);
        this.loadLines();
        this.newLine = { 
          lineNumber: 0,
          numberOfBuses: 0,
          working: 0,
          notWorking: 0,
          date:new Date()
        };
      },
      error: (err: { error: any; }) => {
        console.error('Erreur complète:', err);
        if (err.error) console.error('Détails:', err.error);
      }
    });
  }

  

// Getters/Setters pour le two-way binding
get lineNumberValue(): number {
  return this.selectedLine?.lineNumber ?? this.newLine.lineNumber!;
}
set lineNumberValue(value: number) {
  if (this.selectedLine) this.selectedLine.lineNumber = value;
  else this.newLine.lineNumber = value;
}

get numberOfBusesValue(): number {
  return this.selectedLine?.numberOfBuses ?? this.newLine.numberOfBuses!;
}
set numberOfBusesValue(value: number) {
  if (this.selectedLine) this.selectedLine.numberOfBuses = value;
  else this.newLine.numberOfBuses = value;
}

get workingValue(): number {
  return this.selectedLine?.working ?? this.newLine.working!;
}
set workingValue(value: number) {
  if (this.selectedLine) this.selectedLine.working = value;
  else this.newLine.working = value;
}

// Ajoutez les mêmes getters/setters pour les autres champs
get notWorkingValue(): number {
  return this.selectedLine?.notWorking ?? this.newLine.notWorking!;
}
set notWorkingValue(value: number) {
  if (this.selectedLine) this.selectedLine.notWorking = value;
  else this.newLine.notWorking = value;
}

get dateValue(): Date {
  return this.selectedLine?.date ?? this.newLine.date!;
}
set dateValue(value: Date) {
  if (this.selectedLine) this.selectedLine.date = value;
  else this.newLine.date = value;
}
}


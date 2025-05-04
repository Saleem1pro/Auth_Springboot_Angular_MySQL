import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { LineInfos } from '../model/lineinfos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-line-infos',
  imports: [CommonModule,FormsModule],
  templateUrl: './line-infos.component.html',
  styleUrl: './line-infos.component.css',
  standalone: true
})
export class LineInfosComponent {
  //lineInfosList: LineInfos[] = [];
  lineInfosList :any;
  newLine: Partial<LineInfos> = {
    line_number: 0,
    number_of_buses: 0,
    working: 0,
    not_working: 0,
    date:new Date()
  };
  selectedLine: LineInfos | null = null;
  @Output() onaddLine = new EventEmitter();

  isSaving = false; // Ajoutez cette variable de classe
  lines: any;
  constructor(private apiService: ApiService) { }

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
          line_number: 0,
          number_of_buses: 0,
          working: 0,
          not_working: 0,
          date:new Date()
        };
      },
      error: (err: { error: any; }) => {
        console.error('Erreur complète:', err);
        if (err.error) console.error('Détails:', err.error);
      }
    });
  }

  editLine(lines: LineInfos) {
    this.selectedLine = { ...lines };
  }

  updateLine() {
    if (this.selectedLine) {
      this.apiService.updateLine(this.selectedLine).subscribe({
        next: () => {
          this.loadLines();
          this.selectedLine = null;
        },
        error: (err: any) => console.error('Error updating bus:', err)
      });
    }
  }

// Getters/Setters pour le two-way binding
get lineNumberValue(): number {
  return this.selectedLine?.line_number ?? this.newLine.line_number!;
}
set lineNumberValue(value: number) {
  if (this.selectedLine) this.selectedLine.line_number = value;
  else this.newLine.line_number = value;
}

get numberOfBusesValue(): number {
  return this.selectedLine?.number_of_buses ?? this.newLine.number_of_buses!;
}
set numberOfBusesValue(value: number) {
  if (this.selectedLine) this.selectedLine.number_of_buses = value;
  else this.newLine.number_of_buses = value;
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
  return this.selectedLine?.not_working ?? this.newLine.not_working!;
}
set notWorkingValue(value: number) {
  if (this.selectedLine) this.selectedLine.not_working = value;
  else this.newLine.not_working = value;
}

get dateValue(): Date {
  return this.selectedLine?.date ?? this.newLine.date!;
}
set dateValue(value: Date) {
  if (this.selectedLine) this.selectedLine.date = value;
  else this.newLine.date = value;
}
}

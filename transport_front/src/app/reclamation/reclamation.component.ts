import { Component, EventEmitter, Output } from '@angular/core';
import { Reclamation } from '../model/reclamation';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reclamation',
  imports: [CommonModule, FormsModule],
  templateUrl: './reclamation.component.html',
  styleUrl: './reclamation.component.css'
})
export class ReclamationComponent {


  //reclamationList: Reclamation[] = [];
  newReclamation: Partial<Reclamation> = {
    client_info: "",
    description: "",
    state: "",
    title: "",
    date: new Date()
  };
  selectedReclamation: Reclamation | null = null;
  @Output() onaddReclamation = new EventEmitter();

  isSaving = false; // Ajoutez cette variable de classe
  reclamationList: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadReclamation();
  }

  loadReclamation() {
    this.apiService.getReclamation().subscribe({
      next: (data) => this.reclamationList = data,
      error: (err) => console.error('Error loading reclamations:', err)
    });
  }

  addReclamation() {
    // Vérification des données avant envoi
    console.log('Données envoyées:', this.newReclamation);

    this.apiService.createReclamation(this.newReclamation).subscribe({
      next: (response) => {
        console.log('Réponse du serveur:', response);
        this.loadReclamation();
        this.newReclamation = {
          client_info: "",
          description: "",
          state: "",
          title: "",
          date: new Date()
        };
      },
      error: (err) => {
        console.error('Erreur complète:', err);
        if (err.error) console.error('Détails:', err.error);
      }
    });
  }

  editReclamation(reclamation: Reclamation) {
    this.selectedReclamation = { ...reclamation };
  }

  updateReclamation() {
    if (this.selectedReclamation) {
      this.apiService.updateReclamation(this.selectedReclamation).subscribe({
        next: () => {
          this.loadReclamation();
          this.selectedReclamation = null;
        },
        error: (err) => console.error('Error updating reclamation:', err)
      });
    }
  }

  // Getters/Setters pour le two-way binding
  get clientInfoValue(): string {
    return this.selectedReclamation?.client_info ?? this.newReclamation.client_info!;
  }
  set clientInfoValue(value: string) {
    if (this.selectedReclamation) this.selectedReclamation.client_info = value;
    else this.newReclamation.client_info = value;
  }

  get DescriptionValue(): string {
    return this.selectedReclamation?.description ?? this.newReclamation.description!;
  }
  set DescriptionValue(value: string) {
    if (this.selectedReclamation) this.selectedReclamation.description = value;
    else this.newReclamation.description = value;
  }

  get stateValue(): string {
    return this.selectedReclamation?.state ?? this.newReclamation.state!;
  }
  set stateValue(value: string) {
    if (this.selectedReclamation) this.selectedReclamation.state = value;
    else this.newReclamation.state = value;
  }

  // Ajoutez les mêmes getters/setters pour les autres champs
  get titleValue(): string {
    return this.selectedReclamation?.title ?? this.newReclamation.title!;
  }
  set titleValue(value: string) {
    if (this.selectedReclamation) this.selectedReclamation.title = value;
    else this.newReclamation.title = value;
  }

  get dateValue(): Date {
    return this.selectedReclamation?.date ?? this.newReclamation.date!;
  }
  set dateValue(value: Date) {
    if (this.selectedReclamation) this.selectedReclamation.date = value;
    else this.newReclamation.date = value;
  }



}
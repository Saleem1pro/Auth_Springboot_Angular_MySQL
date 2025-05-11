import { Component, EventEmitter, Output } from '@angular/core';
import { Reclamation } from '../../model/reclamation';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-list-reclamations',
  imports: [CommonModule, FormsModule],
  templateUrl: './list-reclamations.component.html',
  styleUrl: './list-reclamations.component.css'
})
export class ListReclamationsComponent {

  //reclamationList: Reclamation[] = [];
  newReclamation: Partial<Reclamation> = {
    fullName: "",
    cin: "",
    phoneNumber: "",
    ticketNumber: "",
    description: "",
    state: "",
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

  

  // Getters/Setters pour le two-way binding
  get fullNameValue(): string {
    return this.selectedReclamation?.fullName ?? this.newReclamation.fullName!;
  }
  set fullNameValue(value: string) {
    if (this.selectedReclamation) this.selectedReclamation.fullName = value;
    else this.newReclamation.fullName = value;
  }

  get cinValue(): string {
    return this.selectedReclamation?.cin ?? this.newReclamation.cin!;
  }
  set cinValue(value: string) {
    if (this.selectedReclamation) this.selectedReclamation.cin = value;
    else this.newReclamation.cin = value;
  }

  get phoneNumberValue(): string {
    return this.selectedReclamation?.phoneNumber ?? this.newReclamation.phoneNumber!;
  }
  set phoneNumberValue(value: string) {
    if (this.selectedReclamation) this.selectedReclamation.phoneNumber = value;
    else this.newReclamation.phoneNumber = value;
  }
  get ticketNumberValue(): string {
    return this.selectedReclamation?.ticketNumber ?? this.newReclamation.ticketNumber!;
  }
  set ticketNumberValue(value: string) {
    if (this.selectedReclamation) this.selectedReclamation.ticketNumber = value;
    else this.newReclamation.ticketNumber = value;
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

  get dateValue(): Date {
    return this.selectedReclamation?.date ?? this.newReclamation.date!;
  }
  set dateValue(value: Date) {
    if (this.selectedReclamation) this.selectedReclamation.date = value;
    else this.newReclamation.date = value;
  }



}



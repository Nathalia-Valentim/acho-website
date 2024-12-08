import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-company-subscription',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-subscription.component.html',
  styleUrl: './company-subscription.component.css'
})
export class CompanySubscriptionComponent {
    isCourseActive = true; 
    isInscricoesActive = false;  
    
  
    isExpanded = false; 
    isExpandedInscricoes = false;
  
   
    students = [
      { name: 'Carina da Silva' },
      { name: 'Gustavo Andrade' },
      { name: 'Jorge Pinheiros Santos' },
      { name: 'Eduardo Silva Pereira' }
    ];
  
    
    toggleCourse() {
      this.isCourseActive = true;
      this.isInscricoesActive = false;
  
      
      this.isExpanded = !this.isExpanded;
      this.isExpandedInscricoes = false;
    }
  
    toggleInscricoes() {

      this.isInscricoesActive = true;
      this.isCourseActive = false;
  
      this.isExpandedInscricoes = !this.isExpandedInscricoes;
      
      this.isExpanded = false;
    }
  }

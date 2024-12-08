import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();  


  constructor(private router: Router) {}

  fecharModal() {
    this.close.emit();  
  }

  
  redirecionarParaCompany() {
    window.scrollTo(0, 0);
    this.router.navigate(['/company']);
  }
}

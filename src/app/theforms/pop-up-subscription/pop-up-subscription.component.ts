import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pop-up-subscription',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pop-up-subscription.component.html',
  styleUrl: './pop-up-subscription.component.css'
})
export class PopUpSubscriptionComponent {

  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();  


  constructor(private router: Router) {}

  fecharModal() {
    this.close.emit();  
  }

  
  redirecionarParaFutebol() {
    window.scrollTo(0, 0);
    this.router.navigate(['/football']);
  }
}

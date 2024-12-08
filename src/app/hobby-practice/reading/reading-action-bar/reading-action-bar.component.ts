import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-reading-action-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reading-action-bar.component.html',
  styleUrl: './reading-action-bar.component.css'
})
export class ReadingActionBarComponent {
  ativoBotao: string = 'readingpracticeyourhobby';

  constructor(private router: Router) {}

  carregarComponente(componente: string) {
    this.ativoBotao = componente;
    this.router.navigate([componente]);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dance-action-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dance-action-bar.component.html',
  styleUrl: './dance-action-bar.component.css'
})
export class DanceActionBarComponent {
  ativoBotao: string = 'dancepracticeyourhobby';

  constructor(private router: Router) {}

  carregarComponente(componente: string) {
    this.ativoBotao = componente;
    this.router.navigate([componente]);
  }
}

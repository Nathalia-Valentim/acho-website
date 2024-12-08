import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavblueComponent } from '../../../shared/components/navbar/navblue/navblue.component';
import { ReadingActionBarComponent } from '../reading-action-bar/reading-action-bar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { ReadingPracticeYourHobbyComponent } from '../reading-practice-your-hobby/reading-practice-your-hobby.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reading-tips',
  standalone: true,
  imports: [RouterModule, NavblueComponent, ReadingActionBarComponent, CommonModule, NavblueComponent, FooterComponent, ReadingPracticeYourHobbyComponent, FormsModule],
  templateUrl: './reading-tips.component.html',
  styleUrl: './reading-tips.component.css'
})
export class ReadingTipsComponent {
  tips: string[] = [
    "Experimente diferentes tipos de livros – romance, aventura, mistério, não-ficção até descobrir o que mais lhe agrada. Quando você lê algo que realmente gosta, a leitura se torna prazerosa e estimulante.",
    "Reserve alguns minutos por dia para ler, seja antes de dormir, logo pela manhã, ou durante uma pausa. Criar uma rotina ajuda a fazer da leitura um hábito natural e prazeroso. Pode ser apenas 10 a 20 minutos por dia, mas se você for consistente, logo perceberá como os livros começam a fazer parte do seu dia a dia, proporcionando momentos de descanso, reflexão e diversão, sem precisar de grandes blocos de tempo.",
    "Explore e-books, audiolivros e livros físicos para ver o que mais combina com o seu estilo. Audiolivros, por exemplo, são ótimos para quem quer “ler” enquanto faz outras atividades, como caminhar ou cozinhar.",
    "Escolha um espaço tranquilo, com boa iluminação e onde você se sinta relaxado. Um ambiente acolhedor ajuda a manter o foco.",
    "Para muitos, ouvir música instrumental ou sons da natureza pode tornar a leitura mais relaxante. Encontre um som que o ajude a concentrar e mergulhar mais fundo na história ou no tema.",
    "De tempos em tempos, experimente um gênero que você normalmente não leria, como ficção científica, poesia ou filosofia. Isso ajuda a expandir seu gosto literário e pode até revelar novas paixões.",
    "Não tenha pressa! A leitura é uma jornada, não uma corrida. Aproveite cada página e permita-se absorver as ideias e emoções que os livros oferecem. Assim, sua experiência será muito mais enriquecedora."
  ];

  

  newTip: string = '';
  isInputActive: boolean = false;

  // Ativa o campo de texto para digitar uma nova dica
  activateInput() {
    this.isInputActive = true;
  }

  // Submete a nova dica
  submitTip() {
    if (this.newTip.trim()) {
      this.tips.push(this.newTip.trim());
      this.newTip = '';
      this.isInputActive = false;
    }
  }
}

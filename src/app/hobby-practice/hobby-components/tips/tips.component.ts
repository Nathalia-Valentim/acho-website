import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavblueComponent } from '../../../shared/components/navbar/navblue/navblue.component';
import { ActionBarComponent } from '../action-bar/action-bar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-tips',
  standalone: true,
  imports: [ CommonModule, RouterModule, NavblueComponent, ActionBarComponent, FooterComponent, FormsModule ],
  templateUrl: './tips.component.html',
  styleUrl: './tips.component.css'
})
export class TipsComponent {
  tips: string[] = [
    "Utilize exercícios de 'recepção e condução', onde você recebe a bola e imediatamente a conduz em diferentes direções para simular situações de jogo. Isso ajudará a melhorar sua coordenação e o tempo de reação.",
    "Uma defesa eficaz é uma combinação de posicionamento, leitura de jogo, habilidades de desarme e tomada de decisão rápida. Para melhorar sua defesa, comece com exercícios focados no posicionamento. Aprenda a manter uma postura equilibrada, com os joelhos levemente flexionados e o peso distribuído entre os pés, o que permitirá reagir rapidamente aos movimentos do adversário. Trabalhe para se posicionar corretamente entre o atacante e o gol, garantindo que você esteja sempre alinhado para interceptar passes ou bloquear chutes.",
    "Para melhorar a precisão dos seus passes, pratique usar o lado interno do pé. Mantenha a perna de apoio levemente flexionada e aponte para o alvo enquanto executa o passe. Trabalhe em curtos passes com um companheiro ou contra uma parede, concentrando-se em manter o contato suave e direcionado na bola.",
    "Para aprimorar seu drible, use exercícios específicos que ajudam a desenvolver o controle da bola e a agilidade. Recomendo 'drible em zigue-zague.'",
    "Para melhorar a finalização, mire no gol e pratique diferentes chutes, como com o peito do pé para potência e com a parte interna para precisão.",
    "Use tênis adequados para o tipo de campo em que você joga seja este grama, campo sintético, salões, enfim, é de grande ajuda.",
    "No futebol, a velocidade faz a diferença. Faça treinos focados em sprints de curta distância e aceleração."
  ];

  newTip: string = '';
  isInputActive: boolean = false;


  activateInput() {
    this.isInputActive = true;
  }

  submitTip() {
    if (this.newTip.trim()) {
      this.tips.push(this.newTip.trim());
      this.newTip = '';
      this.isInputActive = false;
    }
  }
}


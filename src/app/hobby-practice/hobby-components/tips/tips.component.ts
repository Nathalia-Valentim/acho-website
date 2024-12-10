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
    "Uma defesa eficaz é uma combinação de posicionamento, leitura de jogo, habilidades de desarme e tomada de decisão rápida. Para melhorar sua defesa, comece com exercícios focados no posicionamento. ",
    "Para melhorar a precisão dos seus passes, é essencial treinar o uso do lado interno do pé, que proporciona maior controle e precisão na bola. Ao realizar o passe, é fundamental manter a perna de apoio levemente flexionada, criando uma base estável para o movimento. Aponte a perna de apoio para o alvo, garantindo que o corpo esteja alinhado corretamente para direcionar a bola com precisão. Lembre-se de que a parte interna do pé deve fazer contato com a bola de maneira suave, não com força excessiva, mas com o controle necessário para que a bola siga a trajetória desejada.",
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


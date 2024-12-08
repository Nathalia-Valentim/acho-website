import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavblueComponent } from '../../../../shared/components/navbar/navblue/navblue.component';
import { DanceActionBarComponent } from '../dance-action-bar/dance-action-bar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dance-tips',
  standalone: true,
  imports: [CommonModule, RouterModule, NavblueComponent, DanceActionBarComponent, FooterComponent, FormsModule],
  templateUrl: './dance-tips.component.html',
  styleUrl: './dance-tips.component.css'
})
export class DanceTipsComponent {
  tips: string[] = [
    "Dança exige coordenação entre várias partes do corpo, então pratique exercícios que ajudem no controle dos movimentos e na estabilidade. Tente movimentos isolados de braços, pernas e tronco para ganhar mais controle.",
    "Use roupas leves, confortáveis e flexíveis que permitam total liberdade de movimento, evitando peças que sejam muito justas ou largas a ponto de atrapalhar. Priorize tecidos que absorvam o suor e mantenham a ventilação do corpo. Dependendo do estilo de dança um calçado específico pode ser essencial: sapatilhas proporcionam equilíbrio e graça, enquanto tênis com solado adequado oferecem suporte e segurança. Investir no calçado pode melhorar desempenho e prevenir lesões.",
    "Manter a respiração constante é crucial para sustentar a energia durante as sessões de dança. Pratique respirar profundamente, coordenando com os movimentos para evitar cansaço rápido. Exercícios de resistência, como pequenas séries de dança sem pausas, ajudam a aumentar a capacidade cardiorrespiratória, permitindo dançar com mais vigor.",
    "Cada estilo de dança tem suas próprias técnicas e movimentos, e experimentar diversos estilos pode enriquecer sua experiência. Tente dançar jazz, balé, hip-hop, salsa, entre outros.'",
    "Antes mesmo de se mover, sinta a música. Entenda o ritmo, o tempo e a emoção que ela transmite. A dança é tanto sobre ouvir quanto sobre se mover.",
    "Não tente acompanhar os profissionais imediatamente. Aprenda os passos básicos no seu ritmo e só depois vá aumentando a complexidade.",
    "Se puder dançar em frente a um espelho, isso ajuda a corrigir sua postura, entender seus movimentos e observar sua evolução."
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

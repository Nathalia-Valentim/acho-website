import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})

export class ResultComponent {
  @ViewChild('carousel') carousel!: ElementRef;
  
  schools = [
    {
      image: 'images/remoschool1.png',
      title: 'Centro de Treinamento Remo',
      category: 'Escola de treinamento infanto-juvenil',
      description: 'O Centro de Treinamento Remo é ideal para jovens atletas, oferecendo uma formação de alta qualidade com técnicas avançadas e um ambiente muito estimulante.',
      schedule: 'Horários e Dias de Aula: Segunda a sexta-feira, das 16h às 18h',
      price: '80,00'
    },

    {
      image: 'images/academiaschool.png',
      title: 'Escola de Futebol Atlético Clube',
      category: 'Escola de Futebol Atlético Clube',
      description: 'A Academia Futebol Ferroviário oferece uma formação de alto nível para jovens atletas. É o lugar ideal para quem deseja desenvolver habilidades e paixão pelo futebol.',
      schedule: 'Horários e Dias de Aula: Terça a sábado, das 9h às 17h',
      price: '150,00'
    },

    {
      image: 'images/internacionalschool.png',
      title: 'Academia Internacional Futebol',
      category: 'Escola de treinamento infanto-juvenil',
      description: 'Treinamento de qualidade com técnicas modernas e um ambiente inspirador. A Internacional Futebol é o lugar ideal para aprimorar habilidades e cultivar a paixão pelo futebol.',
      schedule: 'Horários e Dias de Aula: Quinta a sábado, das 12h às 20h',
      price: '100,00'
    },
  ];

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/school']);
  }

  isDragging = false;
  startX = 0;
  scrollLeft = 0;

  movePrev() {
    const carousel = this.carousel.nativeElement;
    carousel.scrollBy({ left: -310, behavior: 'smooth' });
  }

  moveNext() {
    const carousel = this.carousel.nativeElement;
    carousel.scrollBy({ left: 310, behavior: 'smooth' });
  }

  startDragging(event: MouseEvent) {
    this.isDragging = true;
    const carousel = this.carousel.nativeElement;
    this.startX = event.pageX - carousel.offsetLeft;
    this.scrollLeft = carousel.scrollLeft;
  }

  dragging(event: MouseEvent) {
    if (!this.isDragging) return;
    const carousel = this.carousel.nativeElement;
    const x = event.pageX - carousel.offsetLeft;
    const walk = (x - this.startX) * 2;
    carousel.scrollLeft = this.scrollLeft - walk;
  }

  stopDragging() {
    this.isDragging = false;
  }
}

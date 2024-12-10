import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-dance-action-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dance-action-bar.component.html',
  styleUrl: './dance-action-bar.component.css'
})
export class DanceActionBarComponent {
  constructor(private breakpointObserver: BreakpointObserver, private router: Router, @Inject(PLATFORM_ID) private platformId: any) {
    this.observeScreenSize();
  }

  currentScreenSize: string = 'desktop';
  selectedButton: string = 'dancepracticeyourhobby';

  ngOnInit(): void {
    this.updateSelectedButton();

    // Se nenhum botão foi marcado, direciona para "practiceyourhobby"
    if (!this.selectedButton) {
      this.navigateTo('practiceyourhobby');
    }

    this.router.events.subscribe(() => {
      this.updateSelectedButton(); // Atualizar ao navegar entre rotas
    });
  }

  updateSelectedButton() {
    const currentRoute = this.router.url;

    if (currentRoute.includes('practiceyourhobby')) {
      this.selectedButton = 'practiceyourhobby';
    } else if (currentRoute.includes('origin')) {
      this.selectedButton = 'origin';
    } else if (currentRoute.includes('fundamentals')) {
      this.selectedButton = 'fundamentals';
    } else if (currentRoute.includes('benefits')) {
      this.selectedButton = 'benefits';
    } else if (currentRoute.includes('materials')) {
      this.selectedButton = 'materials';
    } else if (currentRoute.includes('tips')) {
      this.selectedButton = 'tips';
    } else if (currentRoute.includes('events')) {
      this.selectedButton = 'events';
    } else {
      this.selectedButton = ''; // Nenhum botão ativo
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  observeScreenSize() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.currentScreenSize = 'mobile';
        } else if (result.breakpoints[Breakpoints.Small]) {
          this.currentScreenSize = 'tablet';
        } else if (result.breakpoints[Breakpoints.Medium]) {
          this.currentScreenSize = 'desktop-medium';
        } else if (result.breakpoints[Breakpoints.Large]) {
          this.currentScreenSize = 'desktop-large';
        }
      }
    });

    this.breakpointObserver.observe(['(max-width: 1024px)']).subscribe(result => {
      this.showArrows = result.matches;
    });
  }

  showArrows: boolean = false;

  scrollCarrossel(direction: number): void {
    if (isPlatformBrowser(this.platformId)) {
      const container = document.querySelector('.action-container') as HTMLElement;
      if (container) {
        const scrollAmount = 150;
        container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });

        setTimeout(() => this.updateArrowsVisibility(container), 300);
      }
    }
  }

  updateArrowsVisibility(container: HTMLElement): void {
    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    this.showLeftArrow = scrollLeft > 0; // Mostra a seta esquerda se não está no início
    this.showRightArrow = scrollLeft < maxScrollLeft; // Mostra a seta direita se não está no final
  }

  showLeftArrow: boolean = false;
  showRightArrow: boolean = true;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const container = document.querySelector('.action-container') as HTMLElement;
      if (container) {
        this.updateArrowsVisibility(container);
      }
    }
  }
}

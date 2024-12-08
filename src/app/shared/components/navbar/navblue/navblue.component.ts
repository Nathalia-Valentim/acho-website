import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navblue',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './navblue.component.html',
  styleUrl: './navblue.component.css'
})

export class NavblueComponent {
  @Input() categoryName: string = '';
  @Input() categoryImage: string = '';
  @Input() description: string = '';
  @Input() minInvestment: string = '';
  
  searchActive: boolean = false;
  searchQuery: string = '';
  currentScreenSize: string = 'desktop';  
  sidebarOpen: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.observeScreenSize();
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
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleSearch(): void {
    this.searchActive = !this.searchActive;
  }
}


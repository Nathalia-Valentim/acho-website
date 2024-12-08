import { Component, Input } from '@angular/core';
import { NavblueComponent } from "../../../shared/components/navbar/navblue/navblue.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { RouterModule } from '@angular/router';
import { RatingsComponent } from "../ratings/ratings.component";
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-school-description',
  standalone: true,
  imports: [NavblueComponent, FooterComponent, RouterModule, RatingsComponent, CommonModule, FormsModule],
  templateUrl: './school-description.component.html',
  styleUrl: './school-description.component.css'
})
export class SchoolDescriptionComponent {
  @Input() categoryName: string = 'FUTEBOL';
  @Input() categoryImage: string = 'images/footballnav.png';

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

import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hobby-do-mes',
  standalone: true,
  imports: [],
  templateUrl: './hobby-do-mes.component.html',
  styleUrl: './hobby-do-mes.component.css'
})
export class HobbyDoMesComponent {

  currentScreenSize: string = 'desktop';

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
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

  
  redirecionarParaDance() {
    window.scrollTo(0, 0);
    this.router.navigate(['/dance']);
  }
}

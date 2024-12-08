import { Component } from '@angular/core';
import { LoginDashboardComponent } from '../login/login-dashboard/login-dashboard.component';
import { Router } from '@angular/router';
import { NavgreenComponent } from "../../shared/components/navbar/navgreen/navgreen.component";

@Component({
  selector: 'app-company-signup',
  standalone: true,
  imports: [NavgreenComponent, LoginDashboardComponent, NavgreenComponent],
  templateUrl: './company-signup.component.html',
  styleUrl: './company-signup.component.css'
})
export class CompanySignupComponent {
  constructor(private router: Router) {}

  navegarParaLogin() {
    console.log("Navegando para a tela de login");
    this.router.navigate(['/company-login']).then(success => {
      if (success) {
        console.log('Navegação bem-sucedida');
      } else {
        console.log('Falha na navegação');
      }
    });
  }
}

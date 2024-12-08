import { Component } from '@angular/core';
import { LoginDashboardComponent } from '../login/login-dashboard/login-dashboard.component';
import { Router } from '@angular/router';
import { NavgreenComponent } from "../../shared/components/navbar/navgreen/navgreen.component";

@Component({
  selector: 'app-company-login',
  standalone: true,
  imports: [NavgreenComponent, LoginDashboardComponent, NavgreenComponent],
  templateUrl: './company-login.component.html',
  styleUrl: './company-login.component.css'
})
export class CompanyLoginComponent {
  constructor(private router: Router) {}

  navegarParaCadastro() {
    console.log("Tentando navegar para a tela de cadastro...");
    this.router.navigate(['/company-sign-up']).then(success => {
      console.log("Navegação bem-sucedida?", success);
    }).catch(error => {
      console.error("Erro na navegação:", error);
    });
  }

}

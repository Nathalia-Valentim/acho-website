import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { PopUpSubscriptionComponent } from '../pop-up-subscription/pop-up-subscription.component';
import { Router } from '@angular/router';

NavbarComponent

@Component({
  selector: 'app-forms-subscription',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent, PopUpSubscriptionComponent],
  templateUrl: './forms-subscription.component.html',
  styleUrl: './forms-subscription.component.css'
})
export class FormsSubscriptionComponent {

  formulario: FormGroup;
  mostrarModal: boolean = false; 

  constructor(private fb: FormBuilder,  private router: Router) {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      DataDeNascimento: [''],
      rg: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
  
      endereco: this.fb.group({
        cep: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
        estado: ['', Validators.required],
        cidade: ['', Validators.required],
        bairro: [''],
        rua: [''],
        numero: [''],
        complemento: ['']
      }),
      contato: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        telefone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/)]]
      }),
      servicos: ['']
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log('Dados do formulário:', this.formulario.value);
      this.mostrarModal = true;  
      this.formulario.reset();
    } else {
      alert('Por favor, preencha os campos obrigatórios!');
    }
  }

  fecharModal() {
    this.mostrarModal = false;
  }

  redirecionarParaCompany() {
    this.router.navigate(['/football']);
  }

}

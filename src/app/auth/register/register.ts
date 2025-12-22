import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule // 👈 necessário para routerLink
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.css'] // 👈 necessário para aplicar o CSS
})
export class Register {

  nome = '';
  email = '';
  senha = '';
  erro = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  cadastrar(): void {
    if (!this.nome || !this.email || !this.senha) {
      this.erro = 'Todos os campos são obrigatórios.';
      return;
    }

    const ok = this.auth.register(this.nome, this.email, this.senha);

    if (!ok) {
      this.erro = 'E-mail já cadastrado.';
      return;
    }

    this.router.navigate(['/dashboard']);
  }

  cancelar(): void {
    this.router.navigate(['/']);
  }
}

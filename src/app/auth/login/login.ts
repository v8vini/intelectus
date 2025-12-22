import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html'
})
export class Login {

  email = '';
  senha = '';
  erro = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  entrar() {
    const ok = this.auth.login(this.email, this.senha);

    if (!ok) {
      this.erro = 'E-mail ou senha inválidos.';
      return;
    }

    this.router.navigate(['/dashboard']);
  }
}

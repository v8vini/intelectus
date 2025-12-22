import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, Usuario } from '../../../auth/auth.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class Perfil implements OnInit {

  usuario!: Usuario;
  previewFoto: string | null = null;
  erro = '';
  sucesso = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const user = this.auth.getUsuarioLogado();

    if (!user) {
      this.router.navigate(['/login']);
      return;
    }

    this.usuario = { ...user };
    this.previewFoto = user.foto || null;
  }

  salvar(): void {
    const ok = this.auth.atualizarUsuario(this.usuario);

    if (!ok) {
      this.erro = 'Dados inválidos.';
      this.sucesso = '';
      return;
    }

    this.erro = '';
    this.sucesso = 'Perfil atualizado com sucesso!';
  }

  cancelar(): void {
    this.router.navigate(['/dashboard']);
  }

  onFotoSelecionada(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.previewFoto = reader.result as string;
      this.usuario.foto = this.previewFoto!;
    };

    reader.readAsDataURL(file);
  }
}

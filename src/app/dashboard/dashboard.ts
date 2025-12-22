import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

import { AuthService, Usuario } from '../auth/auth.service';
import { AlertasService } from '../atividades/services/alertas-service';
import { AtividadesService } from '../atividades/services/atividade.service';
import { Atividade } from '../atividades/models/atividade.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {

  alertas: Atividade[] = [];
  usuario!: Usuario;

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertasService: AlertasService,
    private atividadesService: AtividadesService
  ) {}

  ngOnInit(): void {
    this.carregarUsuario();
    this.recarregarAlertas();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.carregarUsuario();
        this.recarregarAlertas();
      });
  }

  carregarUsuario(): void {
    const user = this.auth.getUsuarioLogado();
    if (user) this.usuario = user;
  }

  recarregarAlertas(): void {
    this.alertas = this.alertasService.getAtividadesComPrazoProximo();
  }

  concluirAtividade(id: number): void {
    this.atividadesService.marcarComoConcluida(id);
    this.recarregarAlertas();
  }

  irParaPerfil(): void {
    this.router.navigate(['/perfil']);
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}

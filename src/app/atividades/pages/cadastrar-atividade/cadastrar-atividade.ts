import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AtividadesService } from '../../services/atividade.service';

@Component({
  selector: 'app-cadastrar-atividade',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastrar-atividade.html'
})
export class CadastrarAtividade {

  titulo = '';
  descricao = '';
  disciplina = '';
  prioridade: 'Baixa' | 'Média' | 'Alta' = 'Média';
  dataEntrega = '';
  erro = '';

  constructor(
    private service: AtividadesService,
    private router: Router
  ) {}

  salvar() {
    if (!this.titulo || !this.disciplina || !this.dataEntrega) {
      this.erro = 'Preencha todos os campos obrigatórios.';
      return;
    }

    this.service.add({
      id: Date.now(),
      titulo: this.titulo,
      descricao: this.descricao,
      disciplina: this.disciplina,
      prioridade: this.prioridade,
      dataEntrega: this.dataEntrega,
      concluida: false
    });

    this.router.navigate(['/dashboard']);
  }

  cancelar() {
    this.router.navigate(['/dashboard']);
  }
}

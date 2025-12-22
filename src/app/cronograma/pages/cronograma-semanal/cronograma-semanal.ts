import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CronogramaService } from '../../services/cronograma';
import { StudyBlock } from '../../models/study-block.model';

@Component({
  selector: 'app-cronograma-semanal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cronograma-semanal.html'
})
export class CronogramaSemanal implements OnInit {

  dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  horarios = ['08:00', '10:00', '14:00', '16:00', '18:00'];

  blocks: StudyBlock[] = [];

  // formulário
  diaSelecionado = '';
  horarioSelecionado = '';
  disciplina = '';
  duracao = '';
  descricao = '';

  editando: StudyBlock | null = null;

  constructor(private service: CronogramaService) {}

  ngOnInit() {
    this.blocks = this.service.getBlocks();
  }

  selecionarHorario(dia: string, horario: string) {
    this.diaSelecionado = dia;
    this.horarioSelecionado = horario;
    this.editando = null;
    this.limparFormulario();
  }

  salvar() {
    if (!this.disciplina || !this.duracao) return;

    if (this.editando) {
      this.editando.disciplina = this.disciplina;
      this.editando.duracao = this.duracao;
      this.editando.descricao = this.descricao;
      this.service.updateBlock(this.editando);
    } else {
      const novo: StudyBlock = {
        id: Date.now(),
        dia: this.diaSelecionado,
        horario: this.horarioSelecionado,
        disciplina: this.disciplina,
        duracao: this.duracao,
        descricao: this.descricao
      };
      this.service.addBlock(novo);
    }

    this.blocks = this.service.getBlocks();
    this.limparFormulario();
  }

  editar(block: StudyBlock) {
    this.editando = block;
    this.diaSelecionado = block.dia;
    this.horarioSelecionado = block.horario;
    this.disciplina = block.disciplina;
    this.duracao = block.duracao;
    this.descricao = block.descricao;
  }

  excluir(id: number) {
    this.service.deleteBlock(id);
    this.blocks = this.service.getBlocks();
  }

  limparFormulario() {
    this.disciplina = '';
    this.duracao = '';
    this.descricao = '';
  }

  getBlock(dia: string, horario: string) {
    return this.blocks.find(b => b.dia === dia && b.horario === horario);
  }
}

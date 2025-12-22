import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CronogramaService } from '../../services/cronograma';
import { StudyBlock } from '../../models/study-block.model';

@Component({
  selector: 'app-cronograma-semanal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cronograma-semanal.html',
  styleUrls: ['./cronograma-semanal.css']
})
export class CronogramaSemanal implements OnInit {

  dias: string[] = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  horarios: string[] = ['08:00', '10:00', '14:00', '16:00', '18:00'];

  blocks: StudyBlock[] = [];

  // formulário
  diaSelecionado: string = '';
  horarioSelecionado: string = '';
  disciplina: string = '';
  duracao: string = '';
  descricao: string = '';

  editando: StudyBlock | null = null;

  constructor(private service: CronogramaService) {}

  ngOnInit(): void {
    this.blocks = this.service.getBlocks();
  }

  selecionarHorario(dia: string, horario: string): void {
    this.diaSelecionado = dia;
    this.horarioSelecionado = horario;
    this.editando = null;
    this.limparFormulario();
  }

  salvar(): void {
    if (!this.disciplina || !this.duracao) return;

    if (this.editando) {
      const atualizado: StudyBlock = {
        ...this.editando,
        disciplina: this.disciplina,
        duracao: this.duracao,
        descricao: this.descricao
      };

      this.service.updateBlock(atualizado);
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

  editar(block: StudyBlock): void {
    this.editando = block;
    this.diaSelecionado = block.dia;
    this.horarioSelecionado = block.horario;
    this.disciplina = block.disciplina;
    this.duracao = block.duracao;
    this.descricao = block.descricao;
  }

  excluir(id: number): void {
    this.service.deleteBlock(id);
    this.blocks = this.service.getBlocks();
  }

  limparFormulario(): void {
    this.disciplina = '';
    this.duracao = '';
    this.descricao = '';
    this.diaSelecionado = '';
    this.horarioSelecionado = '';
    this.editando = null;
  }

  getBlock(dia: string, horario: string): StudyBlock | undefined {
    return this.blocks.find(
      b => b.dia === dia && b.horario === horario
    );
  }
}

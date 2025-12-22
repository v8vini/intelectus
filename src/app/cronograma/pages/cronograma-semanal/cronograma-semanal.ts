import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CronogramaService } from '../../services/cronograma';
import { StudyBlock } from '../../models/study-block.model';
import { BlocoModal } from '../../components/bloco-modal/bloco-modal';

@Component({
  selector: 'app-cronograma-semanal',
  standalone: true,
  imports: [CommonModule, FormsModule, BlocoModal],
  templateUrl: './cronograma-semanal.html',
  styleUrls: ['./cronograma-semanal.css']
})
export class CronogramaSemanal implements OnInit {

  dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  horarios = ['08:00', '10:00', '14:00', '16:00', '18:00'];

  blocks: StudyBlock[] = [];

  modalAberto = false;
  diaSelecionado = '';
  horarioSelecionado = '';
  blocoEditando: StudyBlock | null = null;

  constructor(private service: CronogramaService) {}

  ngOnInit(): void {
    this.blocks = this.service.getBlocks();
  }

  selecionarHorario(dia: string, horario: string): void {
    this.diaSelecionado = dia;
    this.horarioSelecionado = horario;
    this.blocoEditando = null;
    this.modalAberto = true;
  }

  editar(block: StudyBlock): void {
    this.diaSelecionado = block.dia;
    this.horarioSelecionado = block.horario;
    this.blocoEditando = block;
    this.modalAberto = true;
  }

  salvarBloco(bloco: StudyBlock): void {
    if (this.blocoEditando) {
      this.service.updateBlock(bloco);
    } else {
      this.service.addBlock(bloco);
    }

    this.blocks = this.service.getBlocks();
    this.fecharModal();
  }

  excluir(id: number): void {
    this.service.deleteBlock(id);
    this.blocks = this.service.getBlocks();
  }

  fecharModal(): void {
    this.modalAberto = false;
    this.blocoEditando = null;
  }

  getBlock(dia: string, horario: string): StudyBlock | undefined {
    return this.blocks.find(b => b.dia === dia && b.horario === horario);
  }
}
